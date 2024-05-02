import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DostavkaComponent } from './dostavka/dostavka.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';
import { CompanyComponent } from './company/company.component';




@NgModule({
  declarations: [
    AppComponent,
    DostavkaComponent,
    NavbarComponent,
    FooterComponent,
    GarantiyaComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
