import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuadrosComponent } from './lista-cuadros.component';

describe('ListaCuadrosComponent', () => {
  let component: ListaCuadrosComponent;
  let fixture: ComponentFixture<ListaCuadrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCuadrosComponent]
    });
    fixture = TestBed.createComponent(ListaCuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
