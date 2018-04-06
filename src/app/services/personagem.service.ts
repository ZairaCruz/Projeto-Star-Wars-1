import { PersonagemView } from './../models/personagem-view.model';
import { Personagem } from './../models/personagem.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';


@Injectable()
export class PersonagemService {

    route: 'https://swapi.co/api/people/';

  constructor(private _http: HttpClient) { }

/**
 * Função que permite listar todos os personagens.
 */
  lista(){
    return this._http.get("https://swapi.co/api/people/");
  }

  /**
   * Função que permite buscar o personagem por id.
   * @param id 
   */
  personagem(id: string){
    return this._http.get("https://swapi.co/api/people/" + id);
  }

  /**
   * Função que controla a paginação da lista de personagens.
   * @param pagina Página atual
   */
  paginacao(pagina){
    return this._http.get(pagina).pipe(response => response);
  }

  /**
   * Função que permite buscar o filme por id.
   * @param id 
   */
  filmePorId(id: string){
    return this._http.get("https://swapi.co/api/films/" + id);
  }

  /**
   * Função que permite transformar o personagem em personagemView.
   * Para tratamento de algumas propriedades.
   * @param personagem 
   */
  getPersonagemFromView(personagem: Personagem): PersonagemView{
    let personagemView: PersonagemView = new PersonagemView();
    let filmes: string[] = [];

    personagemView.id =  this.convert(personagem.url, 30);
   
    personagemView.nome = personagem.name;
    if(personagem.gender === 'male'){
        personagemView.genero = 'Masculino';
    } 
    if(personagem.gender === 'female'){
        personagemView.genero = 'Feminino';
    }
    if(personagem.gender !== 'female' && personagem.gender !== 'male'){
        personagemView.genero = 'Indefinido';
    }

    personagemView.height = personagem.height;
    personagemView.mass = personagem.mass;
    personagemView.hair_color = personagem.hair_color;
    personagemView.eye_color = personagem.eye_color;

    if(personagem.films.length > 0){
        personagem.films.forEach(item => {
          filmes.push(this.convert(item.toString(), 29));
        });

        console.log(filmes);
    }
    filmes.forEach(item => {
        this.filmePorId(item).subscribe((filme: any) => {
            personagemView.listaFilmes.push(filme);
        });
        console.log(personagemView.listaFilmes);
    });
   
    return personagemView
  }
  
  /**
   * Função que permite extrair o id dos objetos;
   * @param objeto Links que vem em listas.
   * @param tamanho Quantidade de caracteres do link
   */
  convert(objeto: any, tamanho: number): string{  
    let string = objeto.toString();
    let total;
    
    if(string.length === tamanho){
        total= string.charAt(string.length-2);
    } else {
        total = string.charAt(string.length-3) + string.charAt(string.length-2);;
    }
    return total;
  }

}