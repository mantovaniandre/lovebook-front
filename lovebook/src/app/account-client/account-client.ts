import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.html',
  styleUrls: ['./account-client.css']
})
export class AccountClientComponent implements OnInit {
  $livros_literatura: any;
  data_literatura: any;
  data: any[];
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;

  constructor(private service: ConnectionApiService, private dataService: DataService, private connectionApiService: ConnectionApiService,
    private router: Router) {
    this.data = new Array<any>();
}

  ngOnInit() {
    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Romance","","");
    this.$livros_literatura.subscribe((data: any) => {
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
    })

    this.$usuario = this.connectionApiService.identificacaoUsuario();
    this.$usuario.subscribe(data => {
      this.usuario = data;
    console.log(this.usuario)
    })

  



  }

  slides_literatura: any = [[]];

  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


}
