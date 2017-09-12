import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, Ajustes2Page }  from '../pages/index.paginas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = PrincipalPage;
  rootPage:any = TabsPage;

  //////referencia a paginas para usarla en el menu////
    tabs = TabsPage;
    ajustes2 = Ajustes2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private miMenu: MenuController) {
    //miMenu.enable(true);
     
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina:any){
      //aqui hago una redireccion y al mismo tiempo cambio la pagina root
     this.rootPage =pagina; 
     this.miMenu.close(); //cerrar el menu

  }


}

