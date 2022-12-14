import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    MainComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
