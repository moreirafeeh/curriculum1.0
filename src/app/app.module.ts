import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { BannerComponent } from './banner/banner.component';
import { AbasComponent } from './abas/abas.component';


@NgModule({
  declarations: [
    AppComponent,
    MyskillsComponent,
    BannerComponent,
    AbasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
