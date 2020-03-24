import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaSonoraComponent } from './biblioteca-sonora.component';

describe('BibliotecaSonoraComponent', () => {
  let component: BibliotecaSonoraComponent;
  let fixture: ComponentFixture<BibliotecaSonoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaSonoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaSonoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
