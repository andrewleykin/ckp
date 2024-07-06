export const separateThousand = (price: number, separator = ' '): string => {
  return price.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, separator);
};
