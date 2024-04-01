import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';
// import { PaymobTestComponent } from './paymob/paymob-test/paymob-test.component';

const routes: Routes = [
  { path: 'paymob-test', component: PaymobTestComponent} // تحديد مسار لـ PaymobTestComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 