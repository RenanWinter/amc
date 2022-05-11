import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-heart-widget',
  templateUrl: './loader-heart-widget.component.html',
  styleUrls: ['./loader-heart-widget.component.scss']
})
export class LoaderHeartWidgetComponent{
  @Input()
  message?: string;

}

