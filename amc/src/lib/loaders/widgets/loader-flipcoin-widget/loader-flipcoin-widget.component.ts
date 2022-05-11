import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-flipcoin-widget',
  templateUrl: './loader-flipcoin-widget.component.html',
  styleUrls: ['./loader-flipcoin-widget.component.scss']
})
export class LoaderFlipcoinWidgetComponent{
  @Input()
  message?: string;

}
