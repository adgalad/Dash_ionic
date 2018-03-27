import { Component } from '@angular/core';

/**
 * Generated class for the IndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'index',
  templateUrl: 'index.html'
})
export class IndexPage {

  local(item){
    console.log(item, localStorage.getItem(item))
    return localStorage.getItem(item)
  }
  constructor() {
  }

}
