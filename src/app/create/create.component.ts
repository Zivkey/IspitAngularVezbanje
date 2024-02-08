import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Album } from '../model/album';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  albumForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private albumService: AlbumService) {
    this.albumForm = this.formBuilder.group({
      name: ['', Validators.required],
      artist: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.albumForm.valid) {
      const album: Album = {
        id: '',
        name: this.albumForm.value.name,
        artist: this.albumForm.value.artist
      };
      console.log(album);
      this.albumService.createAlbum(album).subscribe(() => {
        this.albumForm.reset();
      }, error => {
        console.log("Error ", error);
      });
      ;
    }
  }
}
