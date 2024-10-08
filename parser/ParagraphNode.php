<?php

namespace dokuwiki\plugin\prosemirror\parser;

class ParagraphNode extends Node
{
    /** @var TextNode[] */
    protected $subnodes = [];

    protected $parent;

    public function __construct($data, Node $parent)
    {
        $this->parent = &$parent;

        $previousNode = null;
        if (empty($data['content'])) {
            return;
        }
        foreach ($data['content'] as $nodeData) {
            $newNode = self::getSubNode($nodeData, $this, $previousNode);
            $this->subnodes[] = $newNode;
            $previousNode = $newNode;
        }
    }

    public function toSyntax()
    {
        $doc = '';
        foreach ($this->subnodes as $subnode) {
            if ($subnode instanceof \dokuwiki\plugin\prosemirror\parser\ParagraphNode) $doc .= "\n";
            $doc .= $subnode->toSyntax();
            if ($subnode instanceof \dokuwiki\plugin\prosemirror\parser\ParagraphNode) $doc .= "\n";
        }
        return $doc;
    }
}
