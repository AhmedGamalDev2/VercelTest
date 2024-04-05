import { PayService } from './../../Services/pay.service';
 import { Component } from '@angular/core';
import { firstStep } from './paymob_functions'; // استيراد الدوال من الملف الذي تحتوي عليه
import { IResponsCallBack } from 'src/app/models/ipaymob';
import { timeInterval } from 'rxjs';
   // import { PayService } from 'src/app/Services/pay.service';
  import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-paymob-test',
  templateUrl: './paymob-test.component.html',
  styleUrls: ['./paymob-test.component.css']
})
export class PaymobTestComponent { 

   constructor(private payService:PayService ) { }//,private cookie : CookieService

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
      // this.cookie.set("finalToken",data.token);
      console.log(data)
      
       this.cardPayment(data.token)//call method  دي افضل في التعامل  // visa 
      //this.CardPayRequestApiPayMob(data.token)
      // this.MobileWalletPayRequestPayMob(data.token)//wallet mobile
    
    },
    error => {
      console.log(error);
    });
}//end

 

  cardPayment(token: string) {//token: string
    //var finaltoken  =""// this.cookie.get("finalToken");
  let iframURL = `https://accept.paymob.com/api/acceptance/iframes/232735?payment_token=${token}`

  location.href = iframURL
}//end

/************************************************************************************************************ */
/************************************************************************************************************ */
/************************************************************************************************************ */
/************************************************************************************************************ */
/************************************************************************************************************ */
/************************************************************************************************************ */
/************************************************************************************************************ */

GetFirstToken2(){
  this.payService.AuthRequestPayMob().subscribe(
    
    (data: any) => {
      console.log("from GetFirstToken")
       
      console.log(data.token)
      this.OrderRegistrationAPIPayMob2(data.token);//call method
    },
    error => {
      console.log(error);
    }
  );
}//end


OrderRegistrationAPIPayMob2(token:string){
  this.payService.OrderRegistrationAPIPayMob(token).subscribe(

    (data: any) => {
      console.log("from OrderRegistrationAPIPayMob")
       
      console.log(data)
      var dataSring = `${data}`
      this.PaymentKeyRequestApiPayMob2(token,dataSring)//data = orderId //call method
    },
    error => {
      console.log(error);
    });
}//end


PaymentKeyRequestApiPayMob2(token:string,orderId:string){
  this.payService.PaymentKeyRequestApiPayMob(token,orderId).subscribe(

    (data: any) => {
      console.log("from OrderRegistrationAPIPayMob")
       
      console.log(data.token)
      // this.cookie.set("finalToken",data.token);
      console.log(data)
      
      // this.cardPayment(data.token)//call method  دي افضل في التعامل  // visa 
      //this.CardPayRequestApiPayMob(data.token)
      this.MobileWalletPayRequestPayMob2(data.token)//wallet mobile
    
    },
    error => {
      console.log(error);
    });
}//end


MobileWalletPayRequestPayMob2(token:string){ //token:string//  سيبك من الدالة دي لانها مش شغالة اصلا &&& cardPayment دي شغال احسن منها 
  // var token  = this.cookie.get("finalToken");
  
  this.payService.MobileWalletPayRequestPayMob(token).subscribe(
    (data: any) => {
      console.log("from MobileWalletPayRequestPayMob")
      console.log(data)
      // console.log(data.redirect_url) 
       
      // تحويل البيانات إلى كائن TypeScript
      const responseObject: any = {
        id: data.id,
        pending: data.pending === "true", // تحويل القيمة إلى boolean
        amount_cents: parseInt(data.amount_cents), // تحويل القيمة إلى integer
        success: data.success === "true", // تحويل القيمة إلى boolean
        is_auth: data.is_auth === "true", // تحويل القيمة إلى boolean
        is_capture: data.is_capture === "true", // تحويل القيمة إلى boolean
        is_standalone_payment: data.is_standalone_payment === "true", // تحويل القيمة إلى boolean
        is_voided: data.is_voided === "true", // تحويل القيمة إلى boolean
        is_refunded: data.is_refunded === "true", // تحويل القيمة إلى boolean
        is_3d_secure: data.is_3d_secure === "true", // تحويل القيمة إلى boolean
        integration_id: parseInt(data.integration_id), // تحويل القيمة إلى integer
        profile_id: parseInt(data.profile_id), // تحويل القيمة إلى integer
        has_parent_transaction: data.has_parent_transaction === "true", // تحويل القيمة إلى boolean
        order: parseInt(data.order), // تحويل القيمة إلى integer
        created_at: new Date(data.created_at), // تحويل القيمة إلى تاريخ
        currency: data.currency,
        merchant_commission: parseInt(data.merchant_commission), // تحويل القيمة إلى integer
        discount_details: data.discount_details,
        is_void: data.is_void === "true", // تحويل القيمة إلى boolean
        is_refund: data.is_refund === "true", // تحويل القيمة إلى boolean
        error_occured: data.error_occured === "true", // تحويل القيمة إلى boolean
        refunded_amount_cents: parseInt(data.refunded_amount_cents), // تحويل القيمة إلى integer
        captured_amount: parseInt(data.captured_amount), // تحويل القيمة إلى integer
        updated_at: new Date(data.updated_at), // تحويل القيمة إلى تاريخ
        is_settled: data.is_settled === "true", // تحويل القيمة إلى boolean
        bill_balanced: data.bill_balanced === "true", // تحويل القيمة إلى boolean
        is_bill: data.is_bill === "true", // تحويل القيمة إلى boolean
        owner: parseInt(data.owner), // تحويل القيمة إلى integer
        merchant_order_id: data.merchant_order_id ? parseInt(data.merchant_order_id) : null, // تحويل القيمة إلى integer أو null إذا كانت فارغة
        data_message: data["data.message"],
        source_data_type: data["source_data.type"],
         source_data_pa: parseInt(data["source_data.pa"]), // تحويل القيمة إلى integer
        source_data_sub_type: data["source_data.sub_type"],
         acq_response_code: parseInt(data["acq_response_code"]), // تحويل القيمة إلى integer
         txn_response_code: parseInt(data["txn_response_code"]), // تحويل القيمة إلى integer
         hmac: data.hmac,
         redirection_url : data.redirection_url


      };
      // قم بتحويل البيانات إلى Object
           const dataObject: any = JSON.parse(JSON.stringify(responseObject));
            console.log("Response object: ", dataObject);
            // window.open(`${dataObject.redirection_url}`, "_blank");

            let iframURL =  `${dataObject.redirection_url}`;
              console.log(`${dataObject.redirection_url}`)
              console.log(iframURL)
              location.href = `${iframURL}`
              setTimeout(() => {
                // Your code to execute after delay
                console.log("settime")
              }, 20000000); // 2000 milliseconds delay (2 seconds)
              
            

      //  this.Callbackrespons(data);
     },
    error => {
      console.log(error);
    });
}//end

Callbackrespons(callbackResponse:any){ //IResponsCallBack //  سيبك من الدالة دي لانها مش شغالة اصلا &&& cardPayment دي شغال احسن منها 
  this.payService.Callbackrespons(callbackResponse).subscribe(
    (data: any) => {
      console.log("from Callbackrespons")
      console.log(data)
      // console.log(data.redirect_url)
      // let iframURL =  data.redirect_url;
      // location.href = iframURL
     },
    error => {
      console.log(error);
    });
}//end


GetAllPaymobPayment(){ //IResponsCallBack //  سيبك من الدالة دي لانها مش شغالة اصلا &&& cardPayment دي شغال احسن منها 
  this.payService.GetAllPaymobPayment().subscribe(
    (data: any) => {
      console.log("from GetAllPaymobPayment")
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
