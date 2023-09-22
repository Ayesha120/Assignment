import { Component } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';
import { Repository } from 'src/app/interface/repository.modal';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.scss']
})
export class SearchRepoComponent {
  searchTerm = '';
  searchResults: Repository[] = [];
  error: string = '';
  p: number = 1;
  loader = false; 
  dataNotFound = false;
  constructor(
    private githubApiService: GithubServiceService,
    private localStorageService: LocalStorageService
    ) {}

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      return;
    }

    this.loader = true;
    this.githubApiService.searchGitRepositories(this.searchTerm).subscribe(
      (data: any) => { 
        this.searchResults = data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          owner: item.owner.login,
          description: item.description,
          stars: item.stargazers_count,
        })); 
        if(this.searchResults.length == 0)
          this.dataNotFound = true;
        else
        this.dataNotFound = false;
        this.loader = false;
        this.error = '';
      },
      (error) => {
        this.searchResults = [];
        this.error = 'An error occurred while fetching results.';
        this.loader = false;
      }
    );
  }

  onBookmark(repository: Repository): void { 
    this.localStorageService.addBookmark(repository); 
  }

}
