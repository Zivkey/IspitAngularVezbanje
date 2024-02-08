import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:8080/v1/albums2';
  private selectedAlbumId: string = '';

  constructor(private http: HttpClient) {}

  setSelectedAlbumId(id: string): void {
    this.selectedAlbumId = id;
  }

  getSelectedAlbumId(): string {
    return this.selectedAlbumId;
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getAlbumById(id: string): Observable<Album> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Album>(url);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }

  deleteAlbum(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
