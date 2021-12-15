// ngModule e BrowserModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// appRountingModule e AppComponente
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// os componentes que criei
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

// as libs que usarei
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    CadastrarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
