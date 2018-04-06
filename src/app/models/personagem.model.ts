export class Personagem {
    name: string;
    gender: string;
    url: string;
    height: string;
    mass: string;
    hair_color: string;
    eye_color: string;
    films: string[];

    construtor(name: string = null, 
            gender: string = null,
            url: string = null,
            height: string = null,
            mass: string = null,
            hair_color: string = null,
            eye_color: string = null,
            films: string[] = []){
        this.name = name;
        this.gender = gender;
        this.url = url;
        this.height= height;
        this.mass= mass;
        this.hair_color= hair_color;
        this.eye_color= eye_color;
        this.films = films;

    }
}


