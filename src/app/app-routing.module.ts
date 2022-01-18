import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'atendimento', component: AtendimentoComponent},
  {path: 'quem-somos', component: QuemSomosComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
