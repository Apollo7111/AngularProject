import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/inerfaces/theme';
import { IUser } from 'src/app/inerfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 get currentUser(){
 return this.authService.user;
 }
// get user2(){
//   return this.authService.loadUser(this.route.snapshot.url[1].path)
//   }
user: IUser | null = null;
themeList: ITheme[] | null = null;



constructor(private authService: AuthService, private route: ActivatedRoute, private apiService: ApiService, private router: Router){

} 
  ngOnInit(): void {
    // console.log(this.route.snapshot.url[1].path)
    // console.log(this?.user2);
    if(this.currentUser?._id == this.route.snapshot.url[1].path){
      this.router.navigate(['/auth/profile'])
    }
    this.authService.loadUser(this.route.snapshot.url[1].path).subscribe({
      next: (value) => {
       this.user = value
      },
      error: (err) => {
       console.error(err)
      }
     }
     )
     this.apiService.loadThemes().subscribe({
      next: (value) => {
       this.themeList = value.filter(theme => theme.userId.username === this.user?.username).reverse();
      },
      error: (err) => {
       console.error(err)
      }
     }
     )
  }

}
