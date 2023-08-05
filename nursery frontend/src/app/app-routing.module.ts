import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { DeleteComponent } from './delete/delete.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [

{path:"",component:LoginComponent},
{path:"home",component:HomeComponent},
{path:"upload",component:UploadComponent},
{path:"delete",component:DeleteComponent},
{path:"profile/:id",component:ProfileComponent},
{path:"display",component:DisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
