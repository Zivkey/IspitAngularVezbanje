import { Component } from '@angular/core';
import { Album } from '../model/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const selectedAlbumId = this.albumService.getSelectedAlbumId(); 
    this.getAlbumDetails(selectedAlbumId); 
  }

  
  getAlbumDetails(id: string): void {
    this.albumService.getAlbumById(id).subscribe(album => {
      this.album = album;
      console.log(album)
    });
  }

}
