import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  private gitApiUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  searchGitRepositories(query: string): Observable<any> {
    const params = { q: query };
    return this.http.get(`${this.gitApiUrl}`, { params });
  }

}
