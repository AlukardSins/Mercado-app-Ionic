import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadolibreProvider } from '../../providers/mercadolibre/mercadolibre'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item_data: any = {};

  constructor(public mercadolibreP: MercadolibreProvider) {
  }
  search(item) {
    this.mercadolibreP.searchItem(item).then((data)=>{
      this.item_data = data;
    }).catch((error)=>{
      console.log(error)
    })
  }
}
