import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController} from 'ionic-angular';
import { Pagina2Page }  from '../index.paginas';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
	pagina2:any=Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public miMenu:MenuController
  	) {
  }

  navegarPagina(){
  		this.navCtrl.push(Pagina2Page);
  }

  mostrarMenu() {
  	this.miMenu.toggle(); //no open() porq puede ser que este abierto
  						  //ni close()	porq puede ser que este cerrado

  }

}
