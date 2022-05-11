import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { promiseDelayed } from '../../helpers/promise.helper';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderModalOptions } from '../models/loaders.model';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  current?: MatDialogRef<LoaderComponent, void>;

  constructor(
    private modal: MatDialog
  ) { }

  async open(options?: LoaderModalOptions) {
    if (this.current) {
      await this.close();
    }


    this.current = this.modal.open(LoaderComponent, {
      data: options,
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      disableClose: true,
      hasBackdrop: true,
      backdropClass: 'loader-backdrop',
      panelClass: ['transparent-modal','center-dialog-content'],
    });
  }

  async close() {
    if (this.current) {
      this.current.close();
      await promiseDelayed(50);
    }
  }
}
