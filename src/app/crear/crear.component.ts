import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../services/lugares-service';
@Component({
  selector: 'crear-component',
  templateUrl: './crear.component.html'
  //styleUrls: ['./app.component.css']
})
export class CrearComponent {
	lugar:any={};
	id:any={};
	constructor(private lugaresService:LugarService, private route: ActivatedRoute){
		this.id = this.route.snapshot.params['id'];
		console.log(this.id)
		if(this.id != 'new'){
			this.lugaresService.getLugar(this.id)
				.valueChanges().subscribe(lugar => {
	        		this.lugar = lugar;
				})
		}	
	}
	
	guardarLugar(){
		var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
		this.lugaresService.obtenerGeodata(direccion)
			.subscribe((result) => {
				debugger;
				this.lugar.lat = result.json().results[0].geometry.location.lat;
				this.lugar.lng = result.json().results[0].geometry.location.lng;
				this.lugar.id = Date.now()
				this.lugaresService.guardarLugar(this.lugar);
				alert("Guardado con exito!!!");
				this.lugar = {};

			});
	        		
		
		
	}
}
