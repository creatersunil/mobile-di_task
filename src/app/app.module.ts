import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AgmCoreModule } from '@agm/core';
import { MarkerdataService } from './markerdata.service';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    FilterPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACizEKfAAFUEYNQUQegnkpkIbKxgCmlDU',
      libraries: ["places"]
    }),
    // MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
],
  providers: [MarkerdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
