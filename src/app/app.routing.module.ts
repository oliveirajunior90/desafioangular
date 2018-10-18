import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilitarEditarComponent } from './militares/militar-editar/militar-editar.component';
import { MilitarComponent } from './militares/militar/militar.component';
import { MilitarDetalheComponent } from './militares/militar-detalhe/militar-detalhe.component';
import { MilitarFormComponent } from './militares/militar-form/militar-form.component';
import { MilitarDetalheResolver } from './militares/guard/militar-detalhe.resolver';
import { MilitarNovoComponent } from './militares/militar-novo/militar-novo.component';



const appRoutes: Routes = [

    { path: '', component: MilitarComponent },
    { path: 'militar/detalhe/:id', component: MilitarDetalheComponent },
    { path: 'militar/novo', component: MilitarNovoComponent },
    { path: 'militar/editar/:id', component: MilitarEditarComponent, resolve:{militar : MilitarDetalheResolver} }
    
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export default class AppRoutingModule {}