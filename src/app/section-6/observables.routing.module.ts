import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './observables/home/home.component';
import { UserComponent } from './observables/user/user.component';


const appRoutes:Routes=[
    {path:"",component:HomeComponent},
    {path:"user/:id",component:UserComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class ObservableRouting {}