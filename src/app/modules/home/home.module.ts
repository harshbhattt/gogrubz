import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WhyGoOutComponent } from './components/why-go-out/why-go-out.component';
import { JoinTheComponent } from './components/join-the/join-the.component';
import { EverythingYouComponent } from './components/everything-you/everything-you.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FindTheComponent } from './components/find-the/find-the.component';


@NgModule({
  declarations: [
    HomePageComponent,
    WhyGoOutComponent,
    JoinTheComponent,
    EverythingYouComponent,
    DownloadAppComponent,
    MapComponent,
    FooterComponent,
    HeaderComponent,
    FindTheComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
