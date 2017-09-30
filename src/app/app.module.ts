import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from './service/drop-down.service';
import { CapitalPipe } from './capital.pipe';
import { SearchPipe } from './search.pipe';
import { ViewComponent } from './view/view.component';
import { RoutesProvider } from './app.routes';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { AppResolve } from './app.resolve';

@NgModule({
  declarations: [
    RootComponent,
    CapitalPipe,
    SearchPipe,
    ViewComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [DropDownService, AuthGuard, AppResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [RootComponent]
})
export class AppModule { }
