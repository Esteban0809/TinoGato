import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeCompraComponent } from './mensaje-compra.component';

describe('MensajeCompraComponent', () => {
  let component: MensajeCompraComponent;
  let fixture: ComponentFixture<MensajeCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeCompraComponent]
    });
    fixture = TestBed.createComponent(MensajeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
