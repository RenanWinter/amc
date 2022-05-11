import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-music-widget',
  templateUrl: './loader-music-widget.component.html',
  styleUrls: ['./loader-music-widget.component.scss']
})
export class LoaderMusicWidgetComponent{
  @Input()
  message?: string;
}
