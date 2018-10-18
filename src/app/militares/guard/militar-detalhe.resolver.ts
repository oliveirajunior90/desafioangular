import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import Militar from '../../model/militar.class';
import { MilitarService } from '../../service/militar.service';


@Injectable()
export class MilitarDetalheResolver implements Resolve<Militar> {
  
  constructor(private militarService : MilitarService) {

  }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Militar>{
      
      let id = route.params['id'];
      return this.militarService.show(id);
  }

}