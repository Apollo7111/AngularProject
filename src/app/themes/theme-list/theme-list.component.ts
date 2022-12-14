import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/inerfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;

  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.apiService.loadThemes().subscribe({
     next: (value) => {
      this.themeList = value;
     },
     error: (err) => {
      console.error(err)
     }
    }
    )
  }

}
