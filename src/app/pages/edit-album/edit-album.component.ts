import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/interfaces/album';
import { AlbumService } from 'src/app/services/album.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  currentAlbum!: Album;

  form!: FormGroup;



  constructor(
    private routerActivated: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.routerActivated.snapshot.paramMap.get("id") + "";
    console.log(this.routerActivated.snapshot.paramMap.get("id"));

    this.albumService.getAlbum(id).subscribe({
      next: res => {
        this.currentAlbum = res,

          this.form = this.fb.group({
            id: this.currentAlbum.id,
            userId: this.currentAlbum.userId,
            title: this.currentAlbum.title,
          })
      },
      error: err => console.log(err)
    });
  }

  onModify(): void {
    const value= this.form.value;
    const id = this.routerActivated.snapshot.paramMap.get("id") + "";
    this.albumService.modifyAlbum(value, id).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
        if(response.status===200){
          this.router.navigate([""]);
        }else{
          alert("Error")
        }
      }
    )
  }

}
