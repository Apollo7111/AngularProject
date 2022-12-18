import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../inerfaces/post';
import { ITheme } from '../inerfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAllThemes(maxCount?: number) {
    let url = '/api/themes'
    if (maxCount) {
      url += '?limit=5'
    }
    return this.http.get<ITheme[]>(url);
  }

  getTheme(id: string) {
    return this.http.get<ITheme[]>('/api/themes' + id);
  }

  createTheme(title: string, content: string) {
    return this.http.post<ITheme[]>('/api/themes', { themeName: title, postText: content });
  }

  subscribe(id: string) {
    return this.http.put<ITheme[]>('/api/themes/' + id, {});
  }
  unsubscribe(id: string) {
    return this.http.put<ITheme[]>('/api/unsub/' + id, {});
  }

  updateTheme(id: string, title: string, content: string) {
    return this.http.put<ITheme[]>('/api/themes' + id, { themeName: title, postText: content });
  }

  deleteThemePost(themeId: string, postId: string) {
    return this.http.delete<ITheme[]>('/api/themes' + themeId + '/post' + postId);
  }

  createPost(id: string, content: string) {
    return this.http.post<IPost[]>('/api/themes/' + id, { postText: content });
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete<IPost[]>('/api/themes/' + themeId + '/posts/' + postId, {});
  }

  likePost(id: string){
    return this.http.put<IPost[]>('/api/likes/' + id, {});
  }
  dislikePost(id: string){
    return this.http.put<IPost[]>('/api/dislike/' + id, {});
  }
}
