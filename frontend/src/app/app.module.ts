import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionPaneComponent } from './action-pane/action-pane.component';
import { ImagePaneComponent } from './image-pane/image-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    ActionPaneComponent,
    ImagePaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
