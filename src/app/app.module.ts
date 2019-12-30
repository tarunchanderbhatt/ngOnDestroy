import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChileComponent } from './view-chile/view-chile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewParentComponent,
    ViewChileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
