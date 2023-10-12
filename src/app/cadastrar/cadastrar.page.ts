import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {

  constructor(
    private _authenticate: AuthenticateService
    ){ }

    criarConta(dados: any){
      this._authenticate.register(dados.email,dados.password)
    

  }
}
