import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Album } from '../interfaces/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private readonly url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<Album[]>(this.url);
  }

  getAlbum(id: string) {
    return this.http.get<Album>(this.url + `/${id}`);
  }

  createAlbum(album: Album): Observable<HttpResponse<any>> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url, album, { headers, observe: 'response' });
  }

  deleteAlbum(id: number): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + `/${id}`, { headers, observe: 'response' })
  }

  modifyAlbum(album: Album, id: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + `/${id}`, album, { headers, observe: 'response' });
  }


}
