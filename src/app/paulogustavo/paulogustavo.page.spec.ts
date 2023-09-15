import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaulogustavoPage } from './paulogustavo.page';

describe('PaulogustavoPage', () => {
  let component: PaulogustavoPage;
  let fixture: ComponentFixture<PaulogustavoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaulogustavoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
