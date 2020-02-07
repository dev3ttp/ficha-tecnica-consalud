import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadConsaludComponent } from './funcionalidad-consalud.component';

describe('FuncionalidadConsaludComponent', () => {
  let component: FuncionalidadConsaludComponent;
  let fixture: ComponentFixture<FuncionalidadConsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadConsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadConsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
