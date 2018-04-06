import { PersonagensComponent } from './personagens/personagem.component';
import { routing } from './app.routing';
import { PersonagemService } from './services/personagem.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [PersonagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
