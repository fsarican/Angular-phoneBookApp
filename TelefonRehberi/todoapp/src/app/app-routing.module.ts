import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { KisilerComponent } from './kisiler/kisiler.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';

const rootconfig:Route[]=[
  {path:'app',component:AppComponent},
  {path:'kisiler',component:KisilerComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'registry-page',component:RegistryPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rootconfig)
  ]
})
export class AppRoutingModule { }
