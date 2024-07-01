export const typographyComponents = ['div', 'span', 'p', 'label', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type UiTypographyComponent = (typeof typographyComponents)[number];

export const typographyVariants = [
  'HeadlineH1',
  'HeadlineH2',
  'HeadlineH3',
  'HeadlineH4',
  'HeadlineH5',
  'Body1',
  'Body2',
  'Body3',
  'Body4',
  'Body5',
] as const;
export type UiTypographyVariant = (typeof typographyVariants)[number];

export const typographyColors = [
  'black',
  'gray',
  'light-gray',
  'white',
  'additional-red',
  'additional-blue',
  'additional-green',
] as const;
export type UiTypographyColor = (typeof typographyColors)[number];
