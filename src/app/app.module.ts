import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTitleComponent } from './a.page-title/page-title.component';
import { AboutUsComponent } from './b.about-us/about-us.component';
import { ActivityComponent } from './c.activity/activity.component';
import { KeyPersonComponent } from './d.key-person/key-person.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CobaComponent } from './z.coba/coba.component';
import { GalleryComponent } from './e.gallery/gallery.component';
import { ContactUsComponent } from './f.contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    AboutUsComponent,
    ActivityComponent,
    KeyPersonComponent,
    CobaComponent,
    GalleryComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
