import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../services/lugares-service';
@Component({
  selector: 'detalle-component',
  templateUrl: './detalle.component.html'
  //styleUrls: ['./app.component.css']
})
export class DetalleComponent {
	
	
	
  //service
  id:any;
  lugares= null;

  constructor(private route: ActivatedRoute,private lugaresService: LugarService){
  	this.id = this.route.snapshot.params['id'] ;
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        this.lugares = lugares;
    });
  }
  //service
	
}
