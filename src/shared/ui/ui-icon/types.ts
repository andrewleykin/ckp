export const iconColors = ['black', 'gray', 'light-gray', 'white', 'additional-green'] as const;
export type UiIconColor = (typeof iconColors)[number];

export const iconNames = [
  'arrow-repeat-all',
  'close',
  'calendar',
  'document-bullet-list',
  'document-link',
  'info',
  'lock',
  'wallet-credit-card',
  'checkmark-circle',
  'logo',
  'arrow',
] as const;
export type UiIconNames = (typeof iconNames)[number];
