import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
		{path:'', component: LugaresComponent},
		{path:'lugares', component: LugaresComponent},
		{path:'detalle/:id', component: DetalleComponent},
		{path:'crear/:id', component: CrearComponent}
]

//firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCCKIObU5ljXSZR60htntpFoqFG1PnasdU",
	authDomain: "mysquare-4fbbc.firebaseapp.com",
	databaseURL: "https://mysquare-4fbbc.firebaseio.com",
	storageBucket: "mysquare-4fbbc.appspot.com",
	messagingSenderId: "854250473165"
};
//firebase


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directives';
import { ContarClicksDirectives } from './directives/contar-clicks.directives';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';
//service
import { LugarService } from './services/lugares-service';
//service

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//firebase

@NgModule({
  declarations: [
		AppComponent,
		ResaltarDirective,
		ContarClicksDirectives,
		DetalleComponent,
		LugaresComponent,
		CrearComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2peT60VRBpdA6nZhPL3XfzRU2fL8_08I'
	}),
	BrowserAnimationsModule,
	RouterModule.forRoot(appRoutes),
	HttpModule,

	//firebase
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    //firebase

  ],
  //service
  providers: [LugarService],
  //service

  bootstrap: [AppComponent]
})
export class AppModule { }
