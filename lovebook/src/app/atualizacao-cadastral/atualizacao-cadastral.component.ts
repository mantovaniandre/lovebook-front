import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-atualizacao-cadastral',
  templateUrl: './atualizacao-cadastral.component.html',
  styleUrls: ['./atualizacao-cadastral.component.css']
})
export class AtualizacaoCadastralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
