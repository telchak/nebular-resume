import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import {  NbThemeModule,
          NbLayoutModule,
          NbButtonModule,
          NbSidebarModule,
          NbMenuModule,
          NbUserModule,
          NbIconModule,
          NbActionsModule,
          NbCardModule,
          NbProgressBarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home-component/home-component.component';
import { AboutMeComponent } from './components/about-me-component/about-me-component.component';
import { ResumeComponent } from './components/resume-component/resume-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbCardModule,
    NbProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
