import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarTopoComponent } from './voltar-topo.component';

describe('VoltarTopoComponent', () => {
  let component: VoltarTopoComponent;
  let fixture: ComponentFixture<VoltarTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoltarTopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoltarTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
