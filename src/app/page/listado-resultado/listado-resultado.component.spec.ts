import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoResultadoComponent } from './listado-resultado.component';

describe('ListadoResultadoComponent', () => {
  let component: ListadoResultadoComponent;
  let fixture: ComponentFixture<ListadoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
