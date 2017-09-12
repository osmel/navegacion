import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
	persona:any = {
			nombre: "",
			edad: 0
	}


  constructor(public vista: ViewController, public navCtrl: NavController, public navParams: NavParams) {
			//console.log(navParams);  //NavParams {data: mimutante: {nombre: "Magneto"poder: "Controlar Metales"}}
  			//console.log(navParams.data.mimutante);
  			this.persona.nombre = navParams.get("nombre"); //de forma más directa evitas poner data
  			this.persona.edad = navParams.get("edad"); //de forma más directa evitas poner data
  }

  cerrar_con_parametros(){
		let datos = {
				nombre: "Duvi Alex Fidel",
				edad: 15,
				coords: {
					lat:10,
					long:-10
				}
		}

	   //cerrando con Parametros (o lo que es lo mismo retornando un parametro al lugar que llamo esta modal)  	
  	  this.vista.dismiss(datos); //despacho o cierro la vista(o lo que es lo mismo Vista Modal)
  }

  cerrar_sin_parametros(){
  	//cerrando sin regresar parametros desde donde llamaron a esta modal
  	this.vista.dismiss();

  }


}
