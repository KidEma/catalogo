import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDetailComponent } from './listado-detail.component';

describe('ListadoDetailComponent', () => {
  let component: ListadoDetailComponent;
  let fixture: ComponentFixture<ListadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
