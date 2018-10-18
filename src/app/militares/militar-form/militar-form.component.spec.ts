import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitarFormComponent } from './militar-form.component';

describe('MilitarFormComponent', () => {
  let component: MilitarFormComponent;
  let fixture: ComponentFixture<MilitarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
