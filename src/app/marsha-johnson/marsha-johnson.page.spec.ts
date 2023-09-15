import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarshaJohnsonPage } from './marsha-johnson.page';

describe('MarshaJohnsonPage', () => {
  let component: MarshaJohnsonPage;
  let fixture: ComponentFixture<MarshaJohnsonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarshaJohnsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
