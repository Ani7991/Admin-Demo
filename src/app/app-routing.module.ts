import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import {AdminGuard} from "./admin.guard"
const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'users', component: UsersComponent},
 { path: 'users/:id', component: UserComponent},
 {path: 'users/:id/edit',component:EditComponent,canActivate:[AdminGuard]}
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }