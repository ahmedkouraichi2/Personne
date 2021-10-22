import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { AuthComponent } from './coposants/auth/auth.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { EditPersonneComponentComponent } from './coposants/edit-personne-component/edit-personne-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    AuthComponent,
    EditPersonneComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
