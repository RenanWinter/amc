import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-ripple-widget',
  templateUrl: './loader-ripple-widget.component.html',
  styleUrls: ['./loader-ripple-widget.component.scss']
})
export class LoaderRippleWidgetComponent {
  @Input()
  message?: string;

}
