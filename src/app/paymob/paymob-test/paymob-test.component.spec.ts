import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymobTestComponent } from './paymob-test.component';

describe('PaymobTestComponent', () => {
  let component: PaymobTestComponent;
  let fixture: ComponentFixture<PaymobTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymobTestComponent]
    });
    fixture = TestBed.createComponent(PaymobTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
