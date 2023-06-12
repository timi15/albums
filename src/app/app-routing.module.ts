import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AddNewAlbumComponent } from './pages/add-new-album/add-new-album.component';
import { EditAlbumComponent } from './pages/edit-album/edit-album.component';

const routes: Routes = [
  { path: "", component: AlbumsComponent },
  { path: "newAlbum", component: AddNewAlbumComponent },
  { path: "edit/:id", component: EditAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
