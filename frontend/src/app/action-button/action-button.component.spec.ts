import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponent, ActionType, Icons } from './action-button.component';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the button correctly', () => {
    component.options = {
      icon: Icons.CLEAR,
      label: "Clear",
      color: 'primary',
      actionType: ActionType.CLEAR
    };

  });
});
