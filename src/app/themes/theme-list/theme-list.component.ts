import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ITheme } from 'src/app/inerfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;

  get isLogged(){
    return this.authService.isLoggedIn;
  }
  get user(){
    return this.authService.user;
  }

  constructor(private apiService: ApiService, private themeService: ThemeService, private authService: AuthService){}

  ngOnInit(): void{
    this.apiService.loadThemes().subscribe({
     next: (value) => {
      this.themeList = value.reverse();
     },
     error: (err) => {
      console.error(err)
     }
    }
    )
  }

  subscribeHandler(themeId: string){
    console.log(themeId)
   this.themeService.subscribe(themeId).subscribe();
  }
  unsubscribeHandler(themeId: string){
    console.log(themeId)
   this.themeService.unsubscribe(themeId).subscribe();
  }

}
