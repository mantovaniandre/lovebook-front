import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-employee',
  templateUrl: './account-employee.component.html',
  styleUrls: ['./account-employee.component.css']
})
export class AccountEmployeeComponent implements OnInit {
  group!: FormGroup;
  data!: Array<any>;
  $livros!: Observable<Array<Livro>>;
  $livros_literatura!: Observable<Array<Livro>>;
  buscaDeLivros: any;
  slides_literatura: any = [[]];
  slides: any = [[]];
  message:any;
  subscription!: Subscription;
  filtroSelecionado!: any;
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;


  saveRange() {
    console.log(this.group.value);
  }

  constructor(private service: ConnectionApiService,
    private router: Router, private dataService: DataService, private connectionApiService: ConnectionApiService) {
    this.data = new Array<any>();
  
  }
ngOnInit(): void {
    this.$usuario = this.connectionApiService.identificacaoUsuario();
    this.$usuario.subscribe(data => {
      this.usuario = data;
    console.log(this.usuario)
    })
  } 

  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  getSeacrh(livroQualquer: string){
    event?.preventDefault();
    this.buscaDeLivros = [livroQualquer, this.filtroSelecionado]

    if(this.filtroSelecionado == undefined){
      return;
    }
    if(this.filtroSelecionado == "Autor"){
      this.$livros = this.service.getBooks("","", livroQualquer, "");
    }
    if(this.filtroSelecionado == "Editora"){
      this.$livros = this.service.getBooks("","", "", livroQualquer);
    }
    if(this.filtroSelecionado == "Livro"){
      this.$livros = this.service.getBooks(livroQualquer,"", "", "");
    }

    this.$livros.subscribe(data => {
      this.data = data;
      this.slides_literatura = this.chunk(this.data, 5);
    })
  }

  selectFiltro(event: any){
    this.filtroSelecionado = event.target.value;
  }

}
