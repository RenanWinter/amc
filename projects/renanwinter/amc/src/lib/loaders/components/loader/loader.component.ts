import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderModalOptions, LoaderType } from '../../models/loaders.model';

@Component({
  selector: 'rdl-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input()
  loader?: LoaderType;

  @Input()
  message?: string;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private _data: LoaderModalOptions
  ) { }

  ngOnInit() {

    if (this._data) {
      this.loader = this._data.loader;
      this.message = this._data.message
    }

    if (!this.loader) {
      this.setRandom();
    }
  }

  setRandom() {
    this.loader = 'music';
  }

}
