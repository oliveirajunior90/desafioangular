import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitarDetalheComponent } from './militar-detalhe.component';

describe('MilitarDetalheComponent', () => {
  let component: MilitarDetalheComponent;
  let fixture: ComponentFixture<MilitarDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitarDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitarDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
