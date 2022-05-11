import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformDialogActionsLayout, InformDialogWidgetAction, InformDialogWidgetData, InformDialogWidgetResult } from '../../models/info_dialog.models';


@Component({
  selector: 'rdl-inform-dialog-widget',
  templateUrl: './inform-dialog-widget.component.html',
  styleUrls: ['./inform-dialog-widget.component.scss']
})
export class InformDialogWidgetComponent implements OnInit {

  @Input()
  title: string = 'Atenção';

  @Input()
  message!: string;

  @Input()
  actions?: InformDialogWidgetAction[];

  @Input()
  actionsLayout: InformDialogActionsLayout = 'centered';

  @Output()
  selected = new EventEmitter<InformDialogWidgetAction>();


  constructor(
    private dialogRef: MatDialogRef<InformDialogWidgetComponent, InformDialogWidgetResult>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: InformDialogWidgetData
  ) { }

  private _createDefaultActions() {
    this.actions = [
      { label: 'OK', color: 'primary' }
    ]
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title ?? 'Atenção!';
      this.message = this.data.message;
      this.actions = this.data.actions;
      this.actionsLayout = this.data.actionsLayout ?? 'centered';
    }

    if (!this.actions || this.actions.length == 0) {
      this._createDefaultActions();
    }
  }

  submitAction(action: InformDialogWidgetAction) {
    if (this.data) {
      this.dialogRef.close(action);
      return;
    }
    this.selected.emit(action);
  }

}
