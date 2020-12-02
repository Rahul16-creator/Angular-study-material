// Angular Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Components and Services
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { DataBindingDeepDiveComponent } from './data-binding-deep-dive/data-binding-deep-dive.component';
import { DatabindingComponent } from './data-binding-deep-dive/databinding/databinding.component';
import { EventbindingComponent } from './data-binding-deep-dive/eventbinding/eventbinding.component';
import { DirectivesDeepdiveComponent } from './section-3/directives-deepdive/directives-deepdive.component';
import { SecDirect } from './section-3/directives/section3.directives';
import { HighDirect } from './section-3/directives/high.directives';
import { ServiceComponent } from './section-4/service/service.component';
import { AccountComponent } from './section-4/service/account/account.component';
import { NewAccountComponent } from './section-4/service/new-account/new-account.component';
import { RoutingComponent } from './section-5/routing/routing.component';
import { HomeComponent } from './section-5/routing/home/home.component';
import { UserComponent } from './section-5/routing/user/user.component';
import { ServerComponent } from './section-5/routing/server/server.component';
import { RoutingService } from './section-5/routing.service';
import { DataService } from './section-5/data_add.service';
import { SingleUserComponent } from './section-5/routing/single-user/single-user.component';
import { PageNotFoundComponent } from './section-5/routing/page-not-found/page-not-found.component';
import { AuthService } from './section-5/auth.service';
import { RouteAuthGuard } from './section-5/route-auth-guard.service';
import { ObservablesComponent } from './section-6/observables/observables.component';

// Routing
import { AppRouting } from './section-5/routing.module';
import { ObservableRouting } from './section-6/observables.routing.module';
import { FormsComponent } from './section-7/form/forms/forms.component';
import { PipesComponent } from './section-8/pipes/pipes.component';
import { FilterPipe } from './section-8/filter.pipe';
import { HttpComponent } from './section-9/http/http.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    DataBindingDeepDiveComponent,
    DatabindingComponent,
    EventbindingComponent,
    DirectivesDeepdiveComponent,
    SecDirect,
    HighDirect,
    ServiceComponent,
    AccountComponent,
    NewAccountComponent,
    RoutingComponent,
    HomeComponent,
    UserComponent,
    ServerComponent,
    SingleUserComponent,
    PageNotFoundComponent,
    ObservablesComponent,
    FormsComponent,
    PipesComponent,
    FilterPipe,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRouting,
    ObservableRouting,
    HttpClientModule

  ],
  providers: [RoutingService, DataService, AuthService, RouteAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }