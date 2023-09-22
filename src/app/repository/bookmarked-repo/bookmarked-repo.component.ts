import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Repository } from 'src/app/interface/repository.modal';

@Component({
  selector: 'app-bookmarked-repo',
  templateUrl: './bookmarked-repo.component.html',
  styleUrls: ['./bookmarked-repo.component.scss']
})
export class BookmarkedRepoComponent {
  p: number = 1;
  dataNotFound = false;

  bookmarkedRepositories: Repository[] = [];

  constructor(private localStorage: LocalStorageService){
    this.bookmarkedRepositories = localStorage.getBookmarkedRepositories();
    if(this.bookmarkedRepositories.length == 0)
    this.dataNotFound = true;
  else
  this.dataNotFound = false;
  }

}
