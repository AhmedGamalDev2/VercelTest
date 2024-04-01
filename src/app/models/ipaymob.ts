export interface IPaymob {
    auth_token: string;
    amount_cents: string;

}
 
export interface IPaymentKeyRequestModel {
    auth_token: string;
    amount_cents?: string;
    expiration?: number;
    order_id: string;
    billing_data: IBillingDataModel;
    currency?: string;
    integration_id?: number;
    lock_order_when_paid?: string;
  }

export interface IOrderRegistrationModel {
    auth_token: string;
    amount_cents: string;
    items: IOrderItem[];
    couresids: number[];
    packagids: number[];
  }
  
  export interface IOrderItem {
    name: string;
    description: string;
  }
  
  export interface IBillingDataModel {
    apartment?: string;
    email: string;
    floor?: string;
    first_name: string;
    street?: string;
    building?: string;
    phone_number: string;
    shipping_method?: string;
    postal_code?: string;
    city?: string;
    country?: string;
    last_name: string;
    state?: string;
  }
 
  export interface IPaymentKeyResponseDTO {
    token: string;
    iframeId: number;
    detail: string;
}

export interface IMobileWalletSourceModel {
    identifier: string;
    subtype: string;
}

export interface IMobileWalletPayRequestModel {
    source: IMobileWalletSourceModel;
    payment_token: string;
}
