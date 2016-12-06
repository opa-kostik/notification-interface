import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable as Rx} from "rxjs/Rx";

import 'rxjs/add/operator/map';


@Injectable()
export class MessagesService {
  
  constructor(private http:Http) { }
  
  public getMessages(url){
    return this.http.get(url)
            .map(res => res.json())
            //.catch((error:any) => Rx.throw(error.json().error || 'Server error'));
  }

}
