import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../interfaces/album';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: res => this.albums = res,
      error: err => console.log(err),
    })
  };

  onChange(id: number): void {
      this.router.navigate([`/edit/${id}`]);
  };

  onDelete(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);

        if (response.status === 200) {
          alert("Sikeresen törölve")
        } else {
          alert("Hiba")
        }
      }
    )
  };

}
