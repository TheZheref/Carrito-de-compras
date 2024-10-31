import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCatalogoComponent } from './carrito-catalogo.component';

describe('CarritoCatalogoComponent', () => {
  let component: CarritoCatalogoComponent;
  let fixture: ComponentFixture<CarritoCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
