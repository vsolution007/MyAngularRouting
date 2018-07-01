import { WindowModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetaModule } from '@ngx-meta/core'
// import 0{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './services/myservice.service';
import { ShareComponent } from './share/share.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    HomeComponent,
    // HttpClientModule
  ],
  imports:[
 CommonModule,
WindowModule,
 
    
    AppRoutingModule,
    MetaModule.forRoot()
  ],
  providers: [MyserviceService],
})
export class AppModule { }
