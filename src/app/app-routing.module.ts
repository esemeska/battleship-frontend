import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'main-menu', component: MainMenuComponent},
  {path: '', redirectTo: '/main-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
