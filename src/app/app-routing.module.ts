import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'albums', component: AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
