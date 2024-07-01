export const alertTypes = ['success'] as const;
export type UiAlertType = (typeof alertTypes)[number];
