import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuadroComponent } from './detalle-cuadro.component';

describe('DetalleCuadroComponent', () => {
  let component: DetalleCuadroComponent;
  let fixture: ComponentFixture<DetalleCuadroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCuadroComponent]
    });
    fixture = TestBed.createComponent(DetalleCuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
