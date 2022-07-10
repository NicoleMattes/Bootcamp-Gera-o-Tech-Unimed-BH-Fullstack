import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwoWayBindingComponent } from './rwo-way-binding.component';

describe('RwoWayBindingComponent', () => {
  let component: RwoWayBindingComponent;
  let fixture: ComponentFixture<RwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwoWayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
