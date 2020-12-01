import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAuthGuard } from './route-auth-guard.service';

import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { ServerComponent } from './routing/server/server.component';
import { SingleUserComponent } from './routing/single-user/single-user.component';
import { UserComponent } from './routing/user/user.component';



const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "user", canActivateChild: [RouteAuthGuard], component: UserComponent,
    children: [
      { path: ":id/:name", component: SingleUserComponent }
    ]
  },
  { path: "server", component: ServerComponent },
  { path: "not-found", component: PageNotFoundComponent ,data:{message:"Page Not Found!!"} },
  { path: "**", redirectTo: "/not-found" }
]



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting { }