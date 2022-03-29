import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/informacion/detalles/detalles.component';
import { InformacionComponent} from './components/informacion/informacion.component';


const routes: Routes = [
   {path: 'home', component: InformacionComponent},
   {path: 'home/:nombre', component: DetallesComponent},
   {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
