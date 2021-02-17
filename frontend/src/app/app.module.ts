import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionPaneComponent } from './action-pane/action-pane.component';
import { ImagePaneComponent } from './image-pane/image-pane.component';
import { ModalComponent } from './modal/modal.component';
import { PublishService } from './publish.service';
import { FrameImageComponent } from './frame-image/frame-image.component';
import { FramesContainerComponent } from './frames-container/frames-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    ActionPaneComponent,
    ImagePaneComponent,
    ModalComponent,
    FrameImageComponent,
    FramesContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PublishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
