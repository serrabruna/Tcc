import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {
  public alertButtons = ['OK'];

  constructor(
    private _authenticate: AuthenticateService,
    private _crudService: CrudService
    ){ }

    criarConta(dados: any){
      console.log(dados);
      console.log(dados.email);
      console.log(dados.senha);
      console.log(dados.confirmsenha);
    

  }
}
