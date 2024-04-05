  // import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBillingDataModel, IMobileWalletPayRequestModel, IOrderItem, IOrderRegistrationModel, IPaymentKeyRequestModel, IPaymentKeyResponseDTO, IPaymob, IResponsCallBack } from '../models/ipaymob';
 // import { OrderRegistrationModel } from '../models/paymobInterface';
 
@Injectable({
  providedIn: 'root'
})
export class PayService {
 
   //private baseUrl = 'https://localhost:7209'; // قم بتعديل الرابط وفقًا لعنوان الواجهة الخلفية
   private baseUrl = 'https://apibooking.growthsacademy.com'; // قم بتعديل الرابط وفقًا لعنوان الواجهة الخلفية

  //private baseUrl = 'http://dotnetplatform.runasp.net';
  constructor(  private http: HttpClient) {} //, private cookieService:CookieService
//we will use cookie service instead of localstorage
AuthRequestPayMob(): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
  var headers = new HttpHeaders().set('Username', `11162387`).append("Password","60-dayfreetrial"); //ولازما نضع كلمة Bearer دي 
  // هنبعت مع كل ريكوست في الهيدر الخاص بيه نبعت التوكن .. كأننا باعتين التوكن في علامة القفل في ال swagger
  // var headers = headers22.append("Address2","CairoAhmed").append("Register",Register.toString())
  
    // var data =  this.http.get<IUnit[]>(`${this.baseUrl3}/Get`);
    // console.log(data) 
    const options = {
      headers: headers,
      withCredentials: false // تفعيل إرسال معلمة الإعتماد
    };

    return this.http.post<any>(`${this.baseUrl}/api/Paymob/AuthRequestPayMob`,"en",options); //old
  }
 

  OrderRegistrationAPIPayMob(token:string): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
  const orderItem1: IOrderItem = { name: "Item 1", description: "Description for Item 1" };
  const orderItem2: IOrderItem = { name: "Item 2", description: "Description for Item 2" };
  
  const items: IOrderItem[] = [orderItem1, orderItem2];
  const courseIds: number[] = [1, 2, 3];
  const packageIds: number[] = [4, 5, 6];
  
  // ملأ المتغير
  const variables: IOrderRegistrationModel = {
    auth_token: token,//"ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RrM01qQXNJbkJvWVhOb0lqb2lOREJtT1RVNU5ESmhORGswT0RSa05XRTJOVGczTldWa1kyRTFaR05rTjJabVkyWTBaREF6TW1aak1USmxPREExWXpnMk0ySTVaR0pqT1Rkak5UWm1NaUlzSW1WNGNDSTZNVGN4TVRnMk56azBPWDAuT19ISFF5SDc4aUJGLU9qRnJKeUlSQ2dieWQxQ0hPaVBaYmFTak9tMkJKaGNVbVNoX1FzT0NWSVUyTWJzejdCN1BpVzBqclFqUUJsdEMycHhjbXJiSlE=",
    amount_cents: "100", // قيمة السنتات ودا متغير ناخده من الكوكي
    items: items,
    couresids: courseIds,
    packagids: packageIds
  };

   return this.http.post<any>(`${this.baseUrl}/api/Paymob/OrderRegistrationAPIPayMob`,variables); //old
}


PaymentKeyRequestApiPayMob(token:string,orderId :string): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
// قيم المتغيرات
const billingData: IBillingDataModel= {
  email: "example@example.com",
  first_name: "John",
  last_name: "Doe",
  phone_number: "123456789"
};

// ملأ المتغير
const variables: IPaymentKeyRequestModel = {
  auth_token: token,
  amount_cents: "100", // قيمة السنتات
  expiration: 3600, // قيمة الانتهاء بالثواني (اختياري)
  order_id: orderId,
  billing_data: billingData,
  currency: "EGP", // العملة (اختياري)
  integration_id:1025030,//252103 ,// 1698298,//1025030,//for wallet //1698298, // for cardمعرّف الاندماج (اختياري)
  lock_order_when_paid: "false" // قفل الطلب عند الدفع (اختياري)
};

  return this.http.post<any>(`${this.baseUrl}/api/Paymob/PaymentKeyRequestApiPayMob`,variables); //old
}


CardPayRequestApiPayMob(token:string): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
   
  // ملأ المتغير
  const variables: IPaymentKeyResponseDTO = {
    token: token,
    iframeId: 232735,
    detail: "your_detail_value_here"
  };
  
  
    return this.http.post<any>(`${this.baseUrl}/api/Paymob/CardPayRequestApiPayMob`,variables); //old
  }
  

  MobileWalletPayRequestPayMob(token:string): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
   
    // ملأ المتغير
    const variables: IMobileWalletPayRequestModel = {
      source: {
          identifier: "wallet mobile number",
          subtype: "WALLET"
      },
      payment_token: token
  };
  
    var returnedDate = this.http.post<any>(`${this.baseUrl}/api/Paymob/MobileWalletPayRequestPayMob`,variables);
    console.log("returnd data")
    console.log(returnedDate)
      return this.http.post<any>(`${this.baseUrl}/api/Paymob/MobileWalletPayRequestPayMob`,variables); //old

    }
    
  
    Callbackrespons(callBackResponse:IResponsCallBack): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
   
      console.log(callBackResponse.id)
      // ملأ المتغير
      const variables: IResponsCallBack = {
        id: callBackResponse.id,
        pending: callBackResponse.pending,
        amount_cents: callBackResponse.amount_cents,
        success: callBackResponse.success,
        is_auth: callBackResponse.is_auth,
        is_capture: callBackResponse.is_capture,
        is_standalone_payment: callBackResponse.is_standalone_payment,
        is_voided: callBackResponse.is_voided,
        is_refunded: callBackResponse.is_refunded,
        is_3d_secure: callBackResponse.is_3d_secure,
        integration_id: callBackResponse.integration_id,
        profile_id: callBackResponse.profile_id,
        has_parent_transaction: callBackResponse.has_parent_transaction,
        order: callBackResponse.order,
        created_at: callBackResponse.created_at,
        currency: callBackResponse.currency,
        merchant_commission: callBackResponse.merchant_commission,
        discount_details: callBackResponse.discount_details,
        is_void: callBackResponse.is_void,
        is_refund: callBackResponse.is_refund,
        error_occured: callBackResponse.error_occured,
        refunded_amount_cents: callBackResponse.refunded_amount_cents,
        captured_amount: callBackResponse.captured_amount,
        updated_at: callBackResponse.updated_at,
        is_settled: callBackResponse.is_settled,
        bill_balanced: callBackResponse.bill_balanced,
        is_bill: callBackResponse.is_bill,
        owner: callBackResponse.owner,
        merchant_order_id: callBackResponse.merchant_order_id,
        data_message: callBackResponse.data_message,
        source_data_type: callBackResponse.source_data_type,
        source_data_pa: callBackResponse.source_data_pa,
        source_data_sub_type: callBackResponse.source_data_sub_type,
        acq_response_code: callBackResponse.acq_response_code,
        txn_response_code: callBackResponse.txn_response_code,
        hmac: callBackResponse.hmac
      };
      
      
      
        console.log(variables)
       var returnedData: any;



       var  response = this.http.post<any>(`${this.baseUrl}/api/Paymob/Callbackrespons`,variables);
       returnedData = response as Object;

      console.log("returnd callback")
      console.log(returnedData)
      // returnedData = JSON.parse(response);

        return this.http.post<any>(`${this.baseUrl}/api/Paymob/Callbackrespons`,variables); //old
  
      }
      






      GetAllPaymobPayment(): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
        var headers = new HttpHeaders().set('Username', `11162387`).append("Password","60-dayfreetrial"); //ولازما نضع كلمة Bearer دي 
        // هنبعت مع كل ريكوست في الهيدر الخاص بيه نبعت التوكن .. كأننا باعتين التوكن في علامة القفل في ال swagger
        // var headers = headers22.append("Address2","CairoAhmed").append("Register",Register.toString())
        
          // var data =  this.http.get<IUnit[]>(`${this.baseUrl3}/Get`);
          // console.log(data) 
          const options = {
            headers: headers,
            withCredentials: false // تفعيل إرسال معلمة الإعتماد
          };
          return this.http.get<any>(`${this.baseUrl}/api/Paymob/GetAllPaymobPayment`,options); //old
        }
        
}
