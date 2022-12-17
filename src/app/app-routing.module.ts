import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  // {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  // {path: 'theme', loadChildren: () => import('./themes/theme.module').then(m => m.ThemeModule)},
  { path: '**', redirectTo: '/not-found' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
