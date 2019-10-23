import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndpointPageComponent } from './components/endpoint-page/endpoint-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'endpoints', component: EndpointPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
