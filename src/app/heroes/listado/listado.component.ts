import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['spiderman','ironman','hulk'];
  orden:number=1;
  indice:number=0;
  borradoItem:string="";
  ngOnInit(): void {
    console.log('init');
  }
  incrementa():void{
    this.orden+=1;
  }
  reinicia():void{
    this.orden=1;
  }
  borrarRegistros():void{
    console.log("Borrando ...");
    this.borradoItem=this.heroes.shift() || '';
    
    
  }

}
