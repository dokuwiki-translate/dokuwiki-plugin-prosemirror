/* eslint-disable */
// icon paths come from https://materialdesignicons.com/
const paths = {
    'alert-circle-outline': 'M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z',
    'chevron-down': 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    'file-image-outline': 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M17,13V19H7L12,14L14,16M10,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,9A1.5,1.5 0 0,1 10,10.5Z',
    'format-bold': 'M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z',
    'format-header-pound': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z',
    'format-header-1': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z',
    'format-header-2': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z',
    'format-header-3': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z',
    'format-header-4': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z',
    'format-header-5': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z',
    'format-header-6': 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z',
    'format-header-decrease': 'M4,4H6V10H10V4H12V18H10V12H6V18H4V4M20.42,7.41L16.83,11L20.42,14.59L19,16L14,11L19,6L20.42,7.41Z',
    'format-header-equal': 'M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14,10V8H21V10H14M14,12H21V14H14V12Z',
    'format-header-increase': 'M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14.59,7.41L18.17,11L14.59,14.59L16,16L21,11L16,6L14.59,7.41Z',
    'format-text': 'M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z',
    'format-italic': 'M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z',
    'format-list-bulleted': 'M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z',
    'format-list-numbers': 'M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4V17.5H3V18.5H4V19H2V20H5V16H2V17Z',
    'format-paragraph': 'M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z',
    'format-strikethrough': 'M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z',
    'format-superscript': 'M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z',
    'format-subscript': 'M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z',
    'format-underline': 'M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z',
    'format-quote-close': 'M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z',
    'console-line': 'M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z',
    'translate-off': 'M12.17,5.81C11.87,6.69 11.47,7.55 11,8.39L12.35,9.74C13.11,8.5 13.71,7.18 14.13,5.81H17.16V3.75H9.94V1.69H7.87V3.75H6.37L8.43,5.81H12.17M15.53,12.91L17.03,14.41L17.67,12.69L19.08,16.47L22.39,19.77L18.7,9.94H16.64L15.53,12.91M1.31,1.31L0,2.62L1.13,3.75H0.65V5.81H3.19L5.26,7.88H4.46C5.21,9.56 6.24,11.15 7.53,12.58L2.28,17.76L3.75,19.22L8.91,14.07L12.11,17.27L12.8,15.43L14.1,16.72L12,22.31H14.06L15.22,19.22H16.6L21.38,24L22.69,22.69L1.31,1.31Z',
    'link-variant': 'M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z',
    'image': 'M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z',
    'arrow-expand-left': 'M20,22H22V2H20V11H5.83L11.33,5.5L9.92,4.08L2,12L9.92,19.92L11.33,18.5L5.83,13H20V22Z',
    'arrow-expand-right': 'M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z',
    'puzzle': 'M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z',
    'puzzle-outline': 'M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z',
    'code-braces': 'M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z',
    'rss': 'M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z',
    'emoticon': 'M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    'note-plus-outline': 'M15,10H20.5L15,4.5V10M4,3H16L22,9V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V5C2,3.89 2.89,3 4,3M4,5V19H20V12H13V5H4M8,17V15H6V13H8V11H10V13H12V15H10V17H8Z',
    'table-plus': 'M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z',
    'table-edit': 'M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.08 20.21,11.08 20.42,11.3L21.7,12.58C21.92,12.79 21.92,13.14 21.7,13.35M12,18.94L18.07,12.88L20.12,14.93L14.06,21H12V18.94M4,2H18A2,2 0 0,1 20,4V8.17L16.17,12H12V16.17L10.17,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,6V10H10V6H4M12,6V10H18V6H12M4,12V16H10V12H4Z',
    'table-row-plus-before': 'M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z',
    'table-row-plus-after': 'M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z',
    'table-row-remove': 'M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z',
    'table-column-plus-before': 'M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z',
    'table-column-plus-after': 'M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z',
    'table-column-remove': 'M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z',
    'table-border': 'M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11',
    'format-align-left': 'M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z',
    'format-align-center': 'M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z',
    'format-align-right': 'M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z',
    'table-merge-cells': 'M5,10H3V6A2,2 0 0,1 5,4H11V6H5V10M19,18H13V20H19A2,2 0 0,0 21,18V14H19V18M5,18V14H3V18A2,2 0 0,0 5,20H11V18H5M19,4H13V6H19V10H21V6A2,2 0 0,0 19,4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z',
    'arrow-split-vertical': 'M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z',
    'table-remove': 'M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z',
    'settings-outline': 'M19.43,12.97L21.54,14.63C21.73,14.78 21.78,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.03 19.05,18.95L16.56,17.94C16.04,18.34 15.5,18.67 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.78,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,12.97M6.5,12C6.5,12.58 6.59,13.13 6.75,13.66L4.68,15.36L5.43,16.66L7.95,15.72C8.69,16.53 9.68,17.12 10.8,17.37L11.24,20H12.74L13.18,17.37C14.3,17.13 15.3,16.54 16.05,15.73L18.56,16.67L19.31,15.37L17.24,13.67C17.41,13.14 17.5,12.58 17.5,12C17.5,11.43 17.41,10.87 17.25,10.35L19.31,8.66L18.56,7.36L16.06,8.29C15.31,7.47 14.31,6.88 13.19,6.63L12.75,4H11.25L10.81,6.63C9.69,6.88 8.69,7.47 7.94,8.29L5.44,7.35L4.69,8.65L6.75,10.35C6.59,10.87 6.5,11.43 6.5,12M12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z',
    'checkbox-blank-outline': 'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    'checkbox-marked-outline': 'M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    'undo': 'M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z',
    'redo': 'M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z',
};
/* eslint-enable */

/**
 * Get a material design icon as svg string
 *
 * @param {string} mdi Icon identifier
 * @return {string} the inline svg element as string
 */
export default function getSvg(mdi) {
    let path = paths['alert-circle-outline'];
    if (typeof (paths[mdi]) !== 'undefined') {
        path = paths[mdi];
    } else {
        console.error(`SVG icon ${mdi} does not exist`);
    }

    return `<svg viewBox="0 0 24 24"><path d="${path}" /></svg>`;
}


/**
 * Use an SVG for an Icon
 *
 * @param {string} mdi Icon identifier
 * @return {HTMLSpanElement} a <span> element which contains the <svg> element
 */
export function svgIcon(mdi) {
    const span = document.createElement('span');
    span.innerHTML = getSvg(mdi);
    return span;
}
