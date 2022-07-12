import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponente{
    nombre  :string='Iron man';
    edad    :number=20.5;
    
    get nombreCapitalizado():string{
        return this.nombre.toLowerCase();
    }
    
    obtenerNombre():string{
        return this.nombreCapitalizado+" - "+this.edad;
    }
    cambiaEdad(y:number):void{
        console.log("edad",y);
        //this.cambiarEdad(y);
        this.edad=y
    }
    cambiaHeroe(y:string):void{
        
        //this.cambiarEdad(23);
        this.nombre=y
    }
    

}