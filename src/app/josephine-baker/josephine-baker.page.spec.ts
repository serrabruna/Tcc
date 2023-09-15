import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JosephineBakerPage } from './josephine-baker.page';

describe('JosephineBakerPage', () => {
  let component: JosephineBakerPage;
  let fixture: ComponentFixture<JosephineBakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JosephineBakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
