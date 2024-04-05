import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';
import { TestPageComponent } from './paymob/test-page/test-page.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    PaymobTestComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
