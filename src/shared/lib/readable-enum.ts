/**
 * Возвращает функцию, которая отображает значение enum в читаемое представление.
 *
 * @generic Enum - Тип перечисления.
 * @generic ReturnType - Тип возвращаемого значения. По умолчанию - строка.
 * @generic isPartial - Указывает, может ли объект иметь неопределенные значения. По умолчанию - false.
 * @param {Object} map - Объект, отображающий значения перечисления на их читаемые представления.
 * @return {(status: Enum) => ReturnType extends string ? ReturnType : string} - Функция, которая принимает значение перечисления и возвращает его читаемое представление.
 * @example
 * Обычное использование
 * const readableStatus = readableEnum<EnumStatus>({
 *   [EnumStatus.Active]: 'Активен',
 *   [EnumStatus.Inactive]: 'Не активен',
 * });
 *
 * readableStatus(EnumStatus.Active); // 'Активен'
 *
 * Использование с указанием конкретного типа
 * const readableStatusWithType = readableEnum<EnumStatus, 'qwe' | 'asd'>({
 *   [EnumStatus.Active]: 'qwe',
 *   [EnumStatus.Inactive]: 'asd',
 * });
 *
 * readableStatusWithType(EnumStatus.Active); // 'qwe'
 *
 * Использование с учетом неопределенных значений
 * const readableStatusPartial = readableEnum<EnumStatus, string, true>({
 *   [EnumStatus.Active]: 'Активен',
 * });
 *
 * readableStatusWithType(EnumStatus.Active); // 'Активен'
 */
export const readableEnum =
  <Enum extends PropertyKey, ReturnType = string, isPartial = false>(
    map: isPartial extends true
      ? { [key in Enum]?: ReturnType }
      : {
          [key in Enum]: ReturnType;
        },
  ) =>
  (status: Enum): ReturnType extends string ? ReturnType : string => {
    // @ts-expect-error: @todo исправить типы
    return map[status] ?? status.toString();
  };
