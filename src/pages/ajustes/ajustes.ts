import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ModalPage }  from '../index.paginas';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public ventModal: ModalController
  	) {
  }

	activarPrincipal (){
		this.navCtrl.parent.select(0);  //selecciona el tab 0, se refiere al padre de los tabs para luego referirse a los hermanos

	}
	mostrar_modal(){
		//let modal = this.ventModal.create(ModalPage);  //este solo lo crea
		let modal = this.ventModal.create(ModalPage, {'nombre':'osmel', edad:'40'});  //envio de parametro en forma de objeto
		modal.present(); //lo presenta("muestra")


		modal.onDidDismiss(parametros=> {
			if (parametros) {
				console.log('Data del modal es: ');
				console.log(parametros);	
			} else {
				console.log('Se cerro sin parametros ');
			}
			
		})

	}



}
