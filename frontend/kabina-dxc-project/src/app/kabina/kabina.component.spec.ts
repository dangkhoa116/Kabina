import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabinaComponent } from './kabina.component';

describe('KabinaComponent', () => {
  let component: KabinaComponent;
  let fixture: ComponentFixture<KabinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
