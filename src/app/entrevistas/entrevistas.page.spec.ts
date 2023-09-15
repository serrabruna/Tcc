import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrevistasPage } from './entrevistas.page';

describe('EntrevistasPage', () => {
  let component: EntrevistasPage;
  let fixture: ComponentFixture<EntrevistasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntrevistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
