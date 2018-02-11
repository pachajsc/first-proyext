import { Component} from '@angular/core';
import { LugarService } from '../services/lugares-service';
@Component({
  selector: 'lugares-component',
  templateUrl: './lugares.component.html',
  //styleUrls: ['./app.component.css']
})
export class LugaresComponent {

	title = 'PlatziSquare';
  listo = false;
  lat:number= -34.5945385;
  lng:number=-58.4009463;

  //service
  lugares= null;

  constructor(private lugaresService: LugarService){
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        this.lugares = lugares;
    });
  }
  //service


}
