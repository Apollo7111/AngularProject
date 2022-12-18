import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost } from 'src/app/inerfaces/post';
import { ITheme } from 'src/app/inerfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent {

  themeList: ITheme[] | null = null;
  postList: IPost[] | null = null;

  get isLogged(){
    return this.authService.isLoggedIn;
  }
  get user(){
    return this.authService.user;
  }

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.url[1].path);
    const themeId = this.route.snapshot.url[1].path;
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value.filter(theme => theme._id == themeId);
      },
      error: (err) => {
        console.error(err)
      }
    }
    )
    this.apiService.loadPosts().subscribe({
      next: (value) => {
        this.postList = value.filter(post => post.themeId._id === themeId).reverse();
        console.log(this.postList);
      },
      error: (err) => {
        console.error(err)
      }
    }
    )
  }

  createPostHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { postText } = form.value;
    this.themeService.createPost(this.route.snapshot.url[1].path, postText)
      .subscribe(() => {
        this.router.navigate(['/theme/details/' + this.route.snapshot.url[1].path]);
      })
  }

  deletePostHandler(themeId: string, postId: string){
    this.themeService.deletePost(themeId, postId).subscribe();
    console.log('delete')
  }

  likePostHandler(postId: string){
    this.themeService.likePost(postId).subscribe();
  }
  dislikePostHandler(postId: string){
    this.themeService.dislikePost(postId).subscribe();
  }

}
