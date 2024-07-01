export type UiStep = {
  text: string;
  key?: string;
};

export type UiStepStatus = 'done' | 'active' | 'rest';

export type UiStepWithStatus = UiStep & {
  status: UiStepStatus;
};
