import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MatSelectModule } from '@angular/material/select';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    NewArticleComponent,
    EditArticleComponent,
    ListArticleComponent,
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    CdkTableModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
