import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepoComponent } from './search-repo.component';

describe('SearchRepoComponent', () => {
  let component: SearchRepoComponent;
  let fixture: ComponentFixture<SearchRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchRepoComponent]
    });
    fixture = TestBed.createComponent(SearchRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
