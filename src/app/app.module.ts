import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymobTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
