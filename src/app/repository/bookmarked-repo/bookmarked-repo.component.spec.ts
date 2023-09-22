import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedRepoComponent } from './bookmarked-repo.component';

describe('BookmarkedRepoComponent', () => {
  let component: BookmarkedRepoComponent;
  let fixture: ComponentFixture<BookmarkedRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedRepoComponent]
    });
    fixture = TestBed.createComponent(BookmarkedRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
