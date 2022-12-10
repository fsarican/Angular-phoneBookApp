import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KisilerComponent } from './kisiler/kisiler.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryFilterPipe } from './kisiler/Filter.Pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    KisilerComponent,
    HomePageComponent,
    RegistryPageComponent,
    RegistryFilterPipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
