import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service';
import { Album } from '../model/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{
    albums: Album[] = [];

    constructor(private albumService: AlbumService,
      private router: Router) {}

    ngOnInit() {
      this.albumService.getAllAlbums().subscribe(albums => {
        this.albums = albums;
      });
    }

    onDetailsButtonClick(albumId: string): void {
      this.albumService.setSelectedAlbumId(albumId);
      this.router.navigate(['/details', albumId]);
  }

}
