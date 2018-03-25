import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'',component:RegisterComponent},{path:'login',component:LoginComponent},{path:'main',component:MainComponent}]),
    InputTextModule,
    ButtonModule,
    HttpModule,
    FormsModule,
    TableModule,
    DataTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
