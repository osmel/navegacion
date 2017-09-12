import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PrincipalPage, AjustesPage }  from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1:any;
	tab2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = PrincipalPage;
  	this.tab2 = AjustesPage;
  }

}
