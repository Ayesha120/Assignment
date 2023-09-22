import { Injectable } from '@angular/core';
import { Repository } from '../interface/repository.modal';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'bookmarkedRepositories';

  getBookmarkedRepositories(): Repository[] {
    const bookmarks = localStorage.getItem(this.storageKey);
    return bookmarks ? JSON.parse(bookmarks) : [];
  }

  addBookmark(repository: Repository): void {
    const bookmark = this.getBookmarkedRepositories();
    bookmark.push(repository);
    localStorage.setItem(this.storageKey, JSON.stringify(bookmark));
  }
}
