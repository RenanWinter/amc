import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-hourglass-widget',
  templateUrl: './loader-hourglass-widget.component.html',
  styleUrls: ['./loader-hourglass-widget.component.scss']
})
export class LoaderHourglassWidgetComponent{
  @Input()
  message?: string;


}
