import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compras } from '../models/Compras';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.component.html',
  styleUrls: ['./my-shopping.component.css']
})
export class MyShoppingComponent implements OnInit {

  $compras!: Observable<any>;
  compras!: Compras[];

  constructor(private service: ConnectionApiService) { }

  ngOnInit(): void {
    this.$compras = this.service.getPurchase();
    this.$compras.subscribe( data => {
      this.compras = data;
      console.log(this.compras);
    })
    window.scroll(0,0);
  }

}
