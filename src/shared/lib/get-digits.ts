/**
 * Возвращает новую строку, содержащую только цифры из исходной строки.
 * @param {string} value Исходная строка.
 * @returns {string} Новая строка, содержащая только цифры.
 */
export const getDigits = (value: string): string => value.replaceAll(/\D/g, '');
