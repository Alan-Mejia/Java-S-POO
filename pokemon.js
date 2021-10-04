//El nombre de las clases debe de ir en mayusculas
class Pokemon{
    #name="";
    #type="";
    #evolutions= []; 

    constructor(name, type, evolutions){
        this.#name= name;
        this.#type= type;
        this.#evolutions= evolutions;
    }

    set name(name){
        //this hace referencia al miembro de la clase llamado name
        this.#name = name;
    }

    set type(type){
        this.#type= type;
    }

    set evolutions(evolutions){
        this.#evolutions=evolutions;
    }

    get name(){

        return this.#name;
    }

    get type(){

        return this.#type;
    }
    get evolutions(){

        return this.#evolutions;
    }

    


    attack(){
        return `${this.name}, esta atacando`;
    }

    envolve(evolution=0){
        //valida que la opcion exista
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "no puedo evolucionar";
        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}

//para crear un objeto proimero variable nombredelobjeto = new Nombredelaclase ("atributos")
const Charmander = new Pokemon("Charmander", "Fire", ["Chamraleon"]);//Creamos un objeto con 3 parametros porque asi lo definimos en el constructor
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.envolve());

console.log("---------------------------");
const Squirtle = new Pokemon("Squirtle","Water", ["Watertortle"]);
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.envolve());
