
import { Filme } from './filme.model';
export class PersonagemView {
    id: string;
    nome: string;
    imagem: string;
    genero: string;
    height: string;
    mass: string;
    hair_color: string;
    eye_color: string;
    filmes: string[];
    listaFilmes: Filme[] = [];
       
    construtor( id: string = null, 
                name: string = null, 
                imagem: string = null,
                genero: string = null,
                height: string = null,
                mass: string = null,
                hair_color: string = null,
                eye_color: string = null,
                filmes: string[] = [],
                listaFilmes: Filme[] = []){
        this.id = id;
        this.nome = name;
        this.imagem = imagem;
        this.genero = genero;
        this.height= height;
        this.mass= mass;
        this.hair_color= hair_color;
        this.eye_color= eye_color;
        this.filmes = filmes;
        this.listaFilmes = listaFilmes;

    }
}