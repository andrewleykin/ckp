export const buttonSizes = ['small', 'large'] as const;
export type UiButtonSize = (typeof buttonSizes)[number];
