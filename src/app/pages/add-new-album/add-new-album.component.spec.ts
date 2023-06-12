import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAlbumComponent } from './add-new-album.component';

describe('AddNewAlbumComponent', () => {
  let component: AddNewAlbumComponent;
  let fixture: ComponentFixture<AddNewAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewAlbumComponent]
    });
    fixture = TestBed.createComponent(AddNewAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
