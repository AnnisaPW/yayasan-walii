import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTitleComponent } from './a.page-title/page-title.component';
import { AboutUsComponent } from './b.about-us/about-us.component';
import { ActivityComponent } from './c.activity/activity.component';
import { KeyPersonComponent } from './d.key-person/key-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    AboutUsComponent,
    ActivityComponent,
    KeyPersonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
