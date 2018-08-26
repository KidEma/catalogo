import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './pages/home/home.component';
import { ListComponent }  from './pages/list/list.component';
import { ListadoDetailComponent }  from './pages/listado-detail/listado-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listado',
    component: ListComponent
  },
  {
    path: 'listado/:title',
    component: ListadoDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
