import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticulosComponent } from './list-articulos.component';

describe('ListArticulosComponent', () => {
  let component: ListArticulosComponent;
  let fixture: ComponentFixture<ListArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListArticulosComponent]
    });
    fixture = TestBed.createComponent(ListArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
