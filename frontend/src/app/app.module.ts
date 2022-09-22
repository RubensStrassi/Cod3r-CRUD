import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/tamplate/header/header.component';
import { FooterComponent } from './components/tamplate/footer/footer.component';
import { NavComponent } from './components/tamplate/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';


//COLOCAR CURRENCY DO BRASIL SEM ERRO 
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreatComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
