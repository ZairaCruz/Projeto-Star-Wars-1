import { PersonagemView } from './../models/personagem-view.model';

import { Personagem } from './../models/personagem.model';
import { PersonagemService } from './../services/personagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  public personagens: Personagem[] = [];
  public personagemView: PersonagemView[] = [];
  public personagem: Personagem = new Personagem();
  public proxima;
  public anterior;
  public pagina;

  constructor(public personagemService: PersonagemService) { }

  ngOnInit() {
    this.personagemService.lista().subscribe((listagem: any) => {
      this.personagens = listagem.results;

      this.personagens.forEach(item => {
        this.personagemView.push(this.personagemService.getPersonagemFromView(item));
        console.log(this.personagemView);
      });
      
      this.proxima = listagem.next;
      this.anterior = listagem.previous;
      this.pagina = 1;

    });
  }

  /**
   * Função que permite organizar a paginação.
   * @param opcao se há mais elementos a serem exibidos.
   */
  paginacao(opcao: boolean){
    let paginaAtual = "";
    if(opcao) {
      paginaAtual = this.proxima;
    } else {
      paginaAtual = this.anterior;
    }
    this.personagemService.paginacao(paginaAtual).subscribe((listagem: any) => {
      this.personagens = listagem.results;

      this.personagens.forEach(item => {
        this.personagemView.push(this.personagemService.getPersonagemFromView(item));
        this.personagemView.slice();
        console.log(this.personagemView);
      });
      this.proxima = listagem.next;
      this.anterior = listagem.previous;
      this.pagina = paginaAtual.slice(-1);
    });
  }

}
