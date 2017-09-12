import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */


@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {  //navParams: para recibir los parametros que se mandan por el push de navctrl

  			//console.log(navParams);  //NavParams {data: mimutante: {nombre: "Magneto"poder: "Controlar Metales"}}
  			//console.log(navParams.data.mimutante);
  			this.mutante = navParams.get("mimutante"); //de forma más directa evitas poner data

  			console.log(this.mutante);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

	irAtraz(){
			this.navCtrl.pop();
	}

	irRoot(){
		    this.navCtrl.popToRoot();

	}

}
