import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformDialogWidgetComponent } from './widgets/inform-dialog-widget/inform-dialog-widget.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InformDialogWidgetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogsModule { }
