import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Pagina3Page }  from '../index.paginas';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;	
  mutantes: any[] = [
  	{
  		nombre:"Magneto",
  		poder : "Controlar Metales"
  	},
  	{
  		nombre:"Wolverine",
  		poder : "Regeneracion Exagerada"
  	}, 	
  	{
  		nombre:"ProfesorX",
  		poder : "psiquico"
  	},  	
  	{
  		nombre:"Gambito",
  		poder : "Poderes con energia"
  	}  	
  ]	;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irPagina3(mut:any){
  	 //console.log(mut);
  	 this.navCtrl.push(Pagina3Page,{'mimutante':mut});

  }
 

}
