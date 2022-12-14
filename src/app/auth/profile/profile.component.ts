import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/inerfaces/theme';

@Component({
  selector: 'app-profile', //in main
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit{
  
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

