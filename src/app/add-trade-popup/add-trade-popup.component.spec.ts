import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradePopupComponent } from './add-trade-popup.component';

describe('AddTradePopupComponent', () => {
  let component: AddTradePopupComponent;
  let fixture: ComponentFixture<AddTradePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTradePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTradePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
