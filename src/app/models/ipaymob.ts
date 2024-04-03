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


export interface IResponsCallBack {
  id: number;
  pending: boolean;
  amount_cents: number;
  success: boolean;
  is_auth: boolean;
  is_capture: boolean;
  is_standalone_payment: boolean;
  is_voided: boolean;
  is_refunded: boolean;
  is_3d_secure: boolean;
  integration_id: number;
  profile_id: number;
  has_parent_transaction: boolean;
  order: number;
  created_at: Date;
  currency: string;
  merchant_commission: number;
  discount_details: string;
  is_void: boolean;
  is_refund: boolean;
  error_occured: boolean;
  refunded_amount_cents: number;
  captured_amount: number;
  updated_at: Date;
  is_settled: boolean;
  bill_balanced: boolean;
  is_bill: boolean;
  owner: number;
  merchant_order_id: number;
  data_message: string;
  source_data_type: string;
  source_data_pa: number;
  source_data_sub_type: string;
  acq_response_code: number;
  txn_response_code: number;
  hmac: string;
}



