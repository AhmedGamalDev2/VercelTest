import { PayService } from './../../Services/pay.service';
 import { Component } from '@angular/core';
import { firstStep } from './paymob_functions'; // استيراد الدوال من الملف الذي تحتوي عليه
 // import { PayService } from 'src/app/Services/pay.service';
 
@Component({
  selector: 'app-paymob-test',
  templateUrl: './paymob-test.component.html',
  styleUrls: ['./paymob-test.component.css']
})
export class PaymobTestComponent {

   constructor(private payService:PayService ) { }

  async doPaymentProcess() {
    try {
      await firstStep(); // تنفيذ الخطوة الأولى
      // يمكنك تنفيذ باقي الخطوات بالتوالي هنا
      console.log("firststep")
    } catch (error) {
      console.error('An error occurred during payment process:', error);
      // يمكنك التعامل مع الأخطاء هنا
    }
  }
  GetFirstToken(){
  this.payService.AuthRequestPayMob().subscribe(

    (data: any) => {
      console.log("from GetFirstToken")
       
      console.log(data.token)
      this.OrderRegistrationAPIPayMob(data.token);//call method
    },
    error => {
      console.log(error);
    }
  );
}//end


OrderRegistrationAPIPayMob(token:string){
  this.payService.OrderRegistrationAPIPayMob(token).subscribe(

    (data: any) => {
      console.log("from OrderRegistrationAPIPayMob")
       
      console.log(data)
      var dataSring = `${data}`
      this.PaymentKeyRequestApiPayMob(token,dataSring)//data = orderId //call method
    },
    error => {
      console.log(error);
    });
}//end


PaymentKeyRequestApiPayMob(token:string,orderId:string){
  this.payService.PaymentKeyRequestApiPayMob(token,orderId).subscribe(

    (data: any) => {
      console.log("from OrderRegistrationAPIPayMob")
       
      console.log(data.token)
       this.cardPayment(data.token)//call method  دي افضل في التعامل  // visa 
      //this.CardPayRequestApiPayMob(data.token)
      // this.MobileWalletPayRequestPayMob(data.token)//wallet mobile
    
    },
    error => {
      console.log(error);
    });
}//end

CardPayRequestApiPayMob(token:string){ //  سيبك من الدالة دي لانها مش شغالة اصلا &&& cardPayment دي شغال احسن منها 
  this.payService.CardPayRequestApiPayMob(token).subscribe(
    (data: any) => {
      console.log("from CardPayRequestApiPayMob")
      console.log(data)
      let iframURL =data; //`https://accept.paymob.com/api/acceptance/iframes/232735?payment_token=${token}`
      location.href = iframURL
     },
    error => {
      console.log(error);
    });
}//end


  cardPayment(token: string) {
  let iframURL = `https://accept.paymob.com/api/acceptance/iframes/232735?payment_token=${token}`

  location.href = iframURL
}//end


MobileWalletPayRequestPayMob(token:string){ //  سيبك من الدالة دي لانها مش شغالة اصلا &&& cardPayment دي شغال احسن منها 
  this.payService.MobileWalletPayRequestPayMob(token).subscribe(
    (data: any) => {
      console.log("from MobileWalletPayRequestPayMob")
      console.log(data)
      // console.log(data.redirect_url)
      // let iframURL =  data.redirect_url;
      // location.href = iframURL
     },
    error => {
      console.log(error);
    });
}//end









}
