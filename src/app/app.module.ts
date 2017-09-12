import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

/*
import { PrincipalPage } from '../pages/principal/principal';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { Pagina3Page } from '../pages/pagina3/pagina3';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { Ajustes2Page } from '../pages/ajustes2/ajustes2';
import { ModalPage } from '../pages/modal/modal';
import { TabsPage } from '../pages/tabs/tabs';
*/
import { Pagina2Page,
        Pagina3Page,
        AjustesPage,
        Ajustes2Page,
        ModalPage,
        TabsPage,
        PrincipalPage 
 }  from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,

    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    TabsPage,
    PrincipalPage

  ],
  imports: [
    BrowserModule,
   // IonicModule.forRoot(MyApp)
  
    
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atraz',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    } )


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    Pagina2Page,
    Pagina3Page,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    TabsPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
