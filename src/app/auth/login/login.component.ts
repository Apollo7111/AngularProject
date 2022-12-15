import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
   

  }

  loginHandler(){
     this.authService.user = {
      username: "John",
      password: "12345",
      email: "john@abv.bg",
      posts: [],
      themes: [],
      _id: "1",
      __v: 0
    };

      const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl])
  }

}
