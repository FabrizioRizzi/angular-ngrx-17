import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './store/posts.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postsReducer }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
