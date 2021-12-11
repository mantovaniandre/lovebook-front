import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.html',
  styleUrls: ['./account-client.css']
})
export class AccountClientComponent implements OnInit {
  data: any[];
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;
  data_literatura!: Array<any>;
  $livros_literatura!: Observable<Array<Livro>>;
  slides_literatura: any = [[]];

  constructor(private service: ConnectionApiService, private dataService: DataService, private connectionApiService: ConnectionApiService,
    private router: Router) {
    this.data = new Array<any>();
}

  ngOnInit() {
    this.$usuario = this.connectionApiService.identificacaoUsuario();
    this.$usuario.subscribe(data => {
      this.usuario = data;
    console.log(this.usuario)
    })

    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Literatura", "","");
    this.$livros_literatura.subscribe(data => {
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
    })
  }

  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
