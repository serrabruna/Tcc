import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlanTuringPage } from './alan-turing.page';

describe('AlanTuringPage', () => {
  let component: AlanTuringPage;
  let fixture: ComponentFixture<AlanTuringPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlanTuringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
