import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/main-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
