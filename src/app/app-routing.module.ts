import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'list-article' },
  { path: 'list-article', component: ListArticleComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
