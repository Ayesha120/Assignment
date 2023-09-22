import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedRepoComponent } from './repository/bookmarked-repo/bookmarked-repo.component';
import { SearchRepoComponent } from './repository/search-repo/search-repo.component'; 
import { SplashComponent } from './splash/splash.component'; 


const routes: Routes = [ 
  { path: '', redirectTo: 'git', pathMatch: 'full' },
  { path:  'git',pathMatch: 'full', component:  SplashComponent},
  { path:  'github-search-repository',pathMatch: 'full', component:  SearchRepoComponent},
  { path:  'bookmarked-repository',pathMatch: 'full', component:  BookmarkedRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
