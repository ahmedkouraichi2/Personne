import { EditPersonneComponentComponent } from './coposants/edit-personne-component/edit-personne-component.component';
import { AuthService } from './services/auth.service';
import { PersonneComponent } from './personne/personne.component';
import { Personne } from './personne';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './coposants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
 {path:"auth",component:AuthComponent},
 {path:"",canActivate:[AuthGuard],children:[
    {path:"edithPersonne/:id",component:EditPersonneComponentComponent},
    { path:"personne",component:PersonneComponent}
 ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
