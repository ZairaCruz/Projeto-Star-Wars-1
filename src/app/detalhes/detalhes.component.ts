import { PersonagemView } from './../models/personagem-view.model';
import { Personagem } from './../models/personagem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PersonagemService } from '../services/personagem.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  public personagem: Personagem = new Personagem();
  public personagemView: PersonagemView = new PersonagemView();
  public personagemDetalhada: PersonagemView = new PersonagemView(); 
  inscricao: Subscription;
  iniciarDetalhes = false;
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
            public personagemService: PersonagemService) { }


  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe((params: any) => {
       this.id = params['id'];

       this.personagemService.personagem(this.id)
         .subscribe((personagem: Personagem) => {
           this.personagem = personagem;
           this.personagemView = this.personagemService.getPersonagemFromView(this.personagem);

         this.personagemDetalhada = this.personagemView;
         console.log(this.personagemDetalhada);
         this.iniciarDetalhes = true;
       });
    })
  
  }

 /**
  * Função do botão Voltar da tela de detalhes.
  */
  voltar(){
    this.router.navigate(['/personagens']);
  }

}
