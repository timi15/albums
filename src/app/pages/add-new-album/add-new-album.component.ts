import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-add-new-album',
  templateUrl: './add-new-album.component.html',
  styleUrls: ['./add-new-album.component.css']
})
export class AddNewAlbumComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: null,
      userId: null,
      title: null
    })

    this.form.valueChanges.subscribe(value => console.log(value)) //kiirja a form változásait logba
  }

  onSubmit(): void {
    const value = this.form.value;

    if (value.id == null || value.userId == null || value.title == null) {
      alert("Error")
    } else {
      this.albumService.createAlbum(value).subscribe(
        (response: HttpResponse<any>) => {
          console.log(response.status);

          if (response.status === 201) {
            this.router.navigate([''])
          } else {
            alert("Error")
          }
        }
      );
    }


  }

}
