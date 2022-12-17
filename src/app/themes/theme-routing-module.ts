import { RouterModule, Routes } from "@angular/router";
import { CreateThemeComponent } from "./create-theme/create-theme.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
//import { ThemeListComponent } from "./theme-list/theme-list.component";

const routes: Routes = [
    {path: 'theme', children: [
      {path : 'create', component: CreateThemeComponent},
      {path : 'details/:id', component: ThemeDetailsComponent}
   ]}
];

export const ThemeRoutingModule = RouterModule.forChild(routes);