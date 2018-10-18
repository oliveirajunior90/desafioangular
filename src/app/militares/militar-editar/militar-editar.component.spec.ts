import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitarEditarComponent } from './militar-editar.component';

describe('MilitarEditarComponent', () => {
  let component: MilitarEditarComponent;
  let fixture: ComponentFixture<MilitarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
