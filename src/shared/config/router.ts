import { readableEnum } from '../lib';

export enum RouteName {
  HOME = 'home',
  REGISTRATION = 'registration',
  REPLACE = 'replace',
  BLOCK = 'block',
  PAYMENT = 'payment',
  PAYMENT_SUCCESS = 'payment-success',
  TERMS = 'terms',
}

export enum LayoutType {
  DEFAULT = 'default',
}

export const DEFAULT_ROUTE = RouteName.HOME;

export const readableRouteName = readableEnum<RouteName>({
  [RouteName.HOME]: 'Главная',
  [RouteName.REGISTRATION]: 'Регистрация SIM карт',
  [RouteName.REPLACE]: 'Замена SIM карт',
  [RouteName.BLOCK]: 'Блокировка SIM карт',
  [RouteName.PAYMENT]: 'Оплата SIM карт',
  [RouteName.PAYMENT_SUCCESS]: 'Оплата завершена',
  [RouteName.TERMS]: 'Договор оферты',
});
