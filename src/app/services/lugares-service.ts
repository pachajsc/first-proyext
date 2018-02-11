import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
@Injectable()
export class LugarService{
	
  constructor(private afDB:AngularFireDatabase, private http: Http){}
  public getLugares(){	
  	return this.afDB.list('lugares/');
  }

  lugares:any;
  public buscarLugar(id){
	return this.lugares.filter((lugar)=>{return lugar.id == id})[0] || null;
  }
 
  public guardarLugar(lugar){
	console.log(lugar);
	this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
	
  }
  public getLugar(id){
  return this.afDB.object('lugares/'+id);
  }
  public obtenerGeodata(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=guemes+4177,+Buenos+Aires,Argentina
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion)
  }

} 