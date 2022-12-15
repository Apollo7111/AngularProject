import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing-module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    CreateThemeComponent,
    ThemeDetailsComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemeModule { }
