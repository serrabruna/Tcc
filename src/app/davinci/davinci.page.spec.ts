import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavinciPage } from './davinci.page';

describe('DavinciPage', () => {
  let component: DavinciPage;
  let fixture: ComponentFixture<DavinciPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavinciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
