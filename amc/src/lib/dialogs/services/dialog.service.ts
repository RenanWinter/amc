import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { AppError } from '../../errors';
import { Either } from '../../either';
import {
  InformDialogActionsLayout,
  InformDialogWidgetAction,
  InformDialogWidgetData,
  InformDialogWidgetResult
} from '../models/info_dialog.models';
import {
  InformDialogWidgetComponent
} from '../widgets/inform-dialog-widget/inform-dialog-widget.component';

export interface DialogOptions {
  requireAction?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  closeOnNavigation?: boolean;
  actionsLayout?: InformDialogActionsLayout;
}

export interface DialogInformOptions extends DialogOptions { }
export interface DialogAskOptions extends DialogOptions {
  actions?: InformDialogWidgetAction[];
}

export interface DialogConfirmOptions extends DialogOptions {
  yesLabel?: string;
  noLabel?: string;
  yesColor?: 'primary' | 'accent' | 'warn';
  noColor?: 'primary' | 'accent' | 'warn';
}


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private modal: MatDialog
  ) { }

  async inform(message: string, title?: string, options?: DialogInformOptions): Promise<void> {
    const ref = this.modal.open<InformDialogWidgetComponent, InformDialogWidgetData, InformDialogWidgetResult>(InformDialogWidgetComponent, {
      data: { message, title, actionsLayout: options?.actionsLayout ?? 'centered' },
      disableClose: options?.requireAction != false,
      width: options?.width ?? '450px',
      height: options?.height,
      maxWidth: options?.maxWidth ?? '95vw',
      maxHeight: options?.maxHeight ?? '80vh',
      autoFocus: true,
      closeOnNavigation: options?.closeOnNavigation ?? true,
    });

    const result = await lastValueFrom(ref.afterClosed());
    return;

  }

  async confirm(message: string, title?: string, options?: DialogConfirmOptions): Promise<boolean> {
    const actions: InformDialogWidgetAction[] = [
      { label: options?.noLabel ?? 'NÃO', color: options?.noColor ?? 'warn' },
      { label: options?.yesLabel ?? 'SIM', color: options?.noColor ?? 'primary' }
    ];

    const ref = this.modal.open<InformDialogWidgetComponent, InformDialogWidgetData, InformDialogWidgetResult>(InformDialogWidgetComponent, {
      data: { message, title, actions, actionsLayout: options?.actionsLayout ?? 'spaced' },
      disableClose: options?.requireAction != false,
      width: options?.width ?? '450px',
      height: options?.height,
      maxWidth: options?.maxWidth ?? '95vw',
      maxHeight: options?.maxHeight ?? '80vh',
      autoFocus: true,
      closeOnNavigation: options?.closeOnNavigation ?? true,
    });

    const result = await lastValueFrom(ref.afterClosed());
    return Boolean(result ? actions.indexOf(result!) : false);
  }

  async handerAppError(error: AppError | any, title?: string) {
    return this.inform(error.message, title ?? 'Atenção', { requireAction: true });
  }

  async handlerEitherResponse<T = any>(either: Either<AppError, T>, title?: string): Promise<T | false> {
    if (either.isLeft) {
      this.handerAppError(either.leftValue, title);
      return false;
    }
    return either.rightValue as any;
  }
}
