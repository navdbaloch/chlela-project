import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export enum Icons {
  ROTATE_RIGHT = 'rotate-right',
  ROTATE_LEFT = 'rotate-left',
  UPLOAD = 'upload',
  RESIZE = 'resize',
  CLEAR = 'clear'
}

export enum ActionType {
  ROTATE_LEFT,
  ROTATE_RIGHT,
  UPLOAD,
  RESIZE,
  CLEAR
}

export interface ActionButtonOptions {
  icon: Icons,
  label: string
  actionType: ActionType,
  color: 'primary' | 'default'
}

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() options: Partial<ActionButtonOptions> = { color: 'default' };
  showLabel = false;

  @Output() onClick = new EventEmitter();

  @HostListener("mouseenter")
  onMouseEnter() {
    this.showLabel = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.showLabel = false;
  }
}
