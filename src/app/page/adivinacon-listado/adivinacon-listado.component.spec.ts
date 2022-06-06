import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaconListadoComponent } from './adivinacon-listado.component';

describe('AdivinaconListadoComponent', () => {
  let component: AdivinaconListadoComponent;
  let fixture: ComponentFixture<AdivinaconListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaconListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaconListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
