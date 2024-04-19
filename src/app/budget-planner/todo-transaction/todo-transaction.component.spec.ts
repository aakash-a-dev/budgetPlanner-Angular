import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTransactionComponent } from './todo-transaction.component';

describe('TodoTransactionComponent', () => {
  let component: TodoTransactionComponent;
  let fixture: ComponentFixture<TodoTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
