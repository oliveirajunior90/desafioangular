import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxMaskModule} from 'ngx-mask'
import { AppComponent } from './app.component';
import { MilitarService } from './service/militar.service';
import { HttpModule } from '@angular/http';
import AppRoutingModule from './app.routing.module';
import { MilitarEditarComponent } from './militares/militar-editar/militar-editar.component';
import { MilitarComponent } from './militares/militar/militar.component';
import { MilitarDetalheComponent } from './militares/militar-detalhe/militar-detalhe.component';
import { MilitarFormComponent } from './militares/militar-form/militar-form.component';
import { MilitarDetalheResolver } from './militares/guard/militar-detalhe.resolver';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormMostrarErroComponent } from './shared/form-mostrar-erro/form-mostrar-erro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MilitarNovoComponent } from './militares/militar-novo/militar-novo.component';


@NgModule({
  declarations: [
    AppComponent,
    MilitarComponent,
    MilitarFormComponent,
    MilitarDetalheComponent,
    MilitarEditarComponent,
    MilitarNovoComponent,
    FormMostrarErroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened : 1
    })
  ],
  providers: [
    MilitarDetalheResolver,
    MilitarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
