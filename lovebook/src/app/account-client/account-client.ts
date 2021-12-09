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
  data: any[];
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;

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
  }

}
