  // import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { IBillingDataModel, IMobileWalletPayRequestModel, IOrderItem, IOrderRegistrationModel, IPaymentKeyRequestModel, IPaymentKeyResponseDTO, IPaymob } from '../models/ipaymob';
 // import { OrderRegistrationModel } from '../models/paymobInterface';
 
@Injectable({
  providedIn: 'root'
})
export class PayService {
 
  // private baseUrl = 'https://localhost:7209'; // قم بتعديل الرابط وفقًا لعنوان الواجهة الخلفية
  private baseUrl = 'http://dotnetplatform.runasp.net';
  constructor(  private http: HttpClient) {} //, private cookieService:CookieService
//we will use cookie service instead of localstorage
AuthRequestPayMob(): Observable<any> { // هنا مستخدمين الدالة دي بس والثلاثة دوال التانيين مش مستخدمين
     

    return this.http.post<any>(`${this.baseUrl}/api/Paymob/AuthRequestPayMob`,"en"); //old
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
    amount_cents: "11000", // قيمة السنتات ودا متغير ناخده من الكوكي
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
  amount_cents: "1", // قيمة السنتات
  expiration: 3600, // قيمة الانتهاء بالثواني (اختياري)
  order_id: orderId,
  billing_data: billingData,
  currency: "EGP", // العملة (اختياري)
  integration_id: 1698298,//1025030,//for wallet //1698298, // for cardمعرّف الاندماج (اختياري)
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
    
  






}
