import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/register/company/company.component';
import { StudentComponent } from './components/register/student/student.component';
import { TypeComponent } from './components/register/type/type.component';


//RUTAS DE NAVEGACIÓN
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'type', component: TypeComponent},
  { path: 'registerCompany', component: CompanyComponent },
  { path: 'registerStudent', component: StudentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
