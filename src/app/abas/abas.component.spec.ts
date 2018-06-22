import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasComponent } from './abas.component';

describe('AbasComponent', () => {
  let component: AbasComponent;
  let fixture: ComponentFixture<AbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
