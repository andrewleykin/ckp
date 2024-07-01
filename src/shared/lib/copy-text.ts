/**
 * Копирует указанный текст в буфер обмена.
 *
 * @param {string} text - Текст, который нужно скопировать.
 * @return {void}
 */
export const copyText = (text: string): void => {
  navigator.clipboard.writeText(text);
};
