import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesSectionComponent } from './home-page/services-section/services-section.component';
import { BusinessSectionComponent } from './home-page/business-section/business-section.component';
import { SubscribeSectionComponent } from './home-page/subscribe-section/subscribe-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ServicesSectionComponent,
    BusinessSectionComponent,
    SubscribeSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
