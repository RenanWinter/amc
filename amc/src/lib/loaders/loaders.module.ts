import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderRippleWidgetComponent } from './widgets/loader-ripple-widget/loader-ripple-widget.component';
import { LoaderHourglassWidgetComponent } from './widgets/loader-hourglass-widget/loader-hourglass-widget.component';
import { LoaderFlipcoinWidgetComponent } from './widgets/loader-flipcoin-widget/loader-flipcoin-widget.component';
import { LoaderHeartWidgetComponent } from './widgets/loader-heart-widget/loader-heart-widget.component';
import { LoaderBlock3dWidgetComponent } from './widgets/loader-block3d-widget/loader-block3d-widget.component';
import { LoaderMusicWidgetComponent } from './widgets/loader-music-widget/loader-music-widget.component';

@NgModule({
  declarations: [
    LoaderComponent,
    LoaderRippleWidgetComponent,
    LoaderHourglassWidgetComponent,
    LoaderFlipcoinWidgetComponent,
    LoaderHeartWidgetComponent,
    LoaderBlock3dWidgetComponent,
    LoaderMusicWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoadersModule { }
