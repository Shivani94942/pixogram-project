import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { FollowComponent } from './components/follow/follow.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MediadetailComponent } from './components/mediadetail/mediadetail.component';
import { MyMediaComponent } from './components/my-media/my-media.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { UploadMediaComponent } from './components/upload-media/upload-media.component';


//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FollowerComponent } from './components/follower/follower.component';

//custom pipe
import { ReversePipe } from './reverse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    BlockUserComponent,
    FollowComponent,
    HeaderComponent,
    LoginComponent,
    MediadetailComponent,
    MyMediaComponent,
    NewsFeedComponent,
    RegisterComponent,
    SearchComponent,
    UploadMediaComponent,
    FollowerComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB8_OaUOooVu-o7Jrnk4oNskqCnWXpoIeA",
      authDomain: "pixogram-36f98.firebaseapp.com",
      storageBucket: "pixogram-36f98.appspot.com",
      projectId: "pixogram-36f98",
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
