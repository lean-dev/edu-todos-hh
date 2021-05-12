import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodosInputComponent } from './todos-input.component';

describe('TodosInputComponent', () => {
  let component: TodosInputComponent;
  let fixture: ComponentFixture<TodosInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trim the entered text', () => {
    spyOn(component.create, 'emit');
    const fldDE = fixture.debugElement.query(By.css('.new-todo'));
    const fldEL: HTMLInputElement = fldDE.nativeElement;
    fldEL.value = '   Please trim   ';
    fldDE.triggerEventHandler('change', {});
    fldDE.triggerEventHandler('keyup.enter', {});
    expect(component.create.emit).toHaveBeenCalledWith('Please trim');
  });

  it('should allow empty titles', () => {
    spyOn(component.create, 'emit');
    const fldDE = fixture.debugElement.query(By.css('.new-todo'));
    const fldEL: HTMLInputElement = fldDE.nativeElement;
    fldEL.value = '      ';
    fldDE.triggerEventHandler('change', {});
    fldDE.triggerEventHandler('keyup.enter', {});
    expect(component.create.emit).not.toHaveBeenCalled();
  });
});
