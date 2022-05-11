export interface InformDialogWidgetAction {
  label: string;
  color?: string;
}

export type InformDialogWidgetResult = InformDialogWidgetAction;

export type InformDialogActionsLayout = 'start' | 'end' | 'spaced' | 'centered';

export interface InformDialogWidgetData {
  message: string;
  title?: string;
  actions?: InformDialogWidgetAction[];
  actionsLayout?: InformDialogActionsLayout;
}
