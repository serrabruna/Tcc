import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
  
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'davinci',
    loadChildren: () => import('./davinci/davinci.module').then( m => m.DavinciPageModule)
  },
  {
    path: 'alan-turing',
    loadChildren: () => import('./alan-turing/alan-turing.module').then( m => m.AlanTuringPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'entrevistas',
    loadChildren: () => import('./entrevistas/entrevistas.module').then( m => m.EntrevistasPageModule)
  },
  {
    path: 'josephine-baker',
    loadChildren: () => import('./josephine-baker/josephine-baker.module').then( m => m.JosephineBakerPageModule)
  },
  {
    path: 'marsha-johnson',
    loadChildren: () => import('./marsha-johnson/marsha-johnson.module').then( m => m.MarshaJohnsonPageModule)
  },
  {
    path: 'ongs',
    loadChildren: () => import('./ongs/ongs.module').then( m => m.OngsPageModule)
  },
  {
    path: 'trans',
    loadChildren: () => import('./trans/trans.module').then( m => m.TransPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
