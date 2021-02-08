import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icons, ActionButtonOptions, ActionType } from '../action-button/action-button.component';

@Component({
  selector: 'app-action-pane',
  templateUrl: './action-pane.component.html',
  styleUrls: ['./action-pane.component.scss']
})
export class ActionPaneComponent {
  @Output() onActionPerformed = new EventEmitter<ActionType>();

  actionButtons: ActionButtonOptions[] = [
    {
      icon: Icons.ROTATE_LEFT,
      actionType: ActionType.ROTATE_LEFT,
      label: 'Rotate Left',
      color: 'default'
    }, {
      icon: Icons.ROTATE_RIGHT,
      actionType: ActionType.ROTATE_RIGHT,
      label: 'Rotate Right',
      color: 'default'
    }, {
      icon: Icons.UPLOAD,
      actionType: ActionType.UPLOAD,
      label: 'Publish',
      color: 'primary'
    }, {
      icon: Icons.RESIZE,
      actionType: ActionType.RESIZE,
      label: 'Resize',
      color: 'default'
    }, {
      icon: Icons.CLEAR,
      actionType: ActionType.CLEAR,
      label: 'Clear',
      color: 'default'
    }
  ];
}
