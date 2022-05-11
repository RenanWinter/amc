import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DialogsModule } from '../dialogs/dialogs.module';
import { LoadersModule } from '../loaders/loaders.module';

const modules = [
  LoadersModule,
  DialogsModule,
  MaterialModule,
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MainModule { }
