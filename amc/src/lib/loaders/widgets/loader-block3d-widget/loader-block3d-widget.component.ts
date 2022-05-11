import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-block3d-widget',
  templateUrl: './loader-block3d-widget.component.html',
  styleUrls: ['./loader-block3d-widget.component.scss']
})
export class LoaderBlock3dWidgetComponent {
  @Input()
  message?: string;

}
