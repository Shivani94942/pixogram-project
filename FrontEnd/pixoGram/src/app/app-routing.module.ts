import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadMediaComponent } from './components/upload-media/upload-media.component';
import { MediadetailComponent } from './components/mediadetail/mediadetail.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { MyMediaComponent } from './components/my-media/my-media.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FollowComponent } from './components/follow/follow.component';
import { FollowerComponent } from './components/follower/follower.component';


const routes: Routes = [
  {path: "" , component: LoginComponent},
  {path: "login" , component: LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "uploadmedia", component:UploadMediaComponent},
  {path: "mediadetails", component: MediadetailComponent},
  {path: "newsfeed", component:NewsFeedComponent},
  {path: "accountdetails", component:AccountDetailsComponent},
  {path: "blockuser", component:BlockUserComponent},
  {path: "search", component: SearchComponent},
  {path: "mymedia", component: MyMediaComponent},
  {path: "header", component:HeaderComponent},
  {path: "follow", component: FollowComponent},
  {path: "follower", component: FollowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
