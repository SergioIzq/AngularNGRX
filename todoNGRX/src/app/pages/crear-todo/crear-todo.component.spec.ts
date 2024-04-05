import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTodoComponent } from './crear-todo.component';

describe('CrearTodoComponent', () => {
  let component: CrearTodoComponent;
  let fixture: ComponentFixture<CrearTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTodoComponent]
    });
    fixture = TestBed.createComponent(CrearTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
