import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modal')
  private modaRef: ElementRef<HTMLDivElement> | null = null;
  show = false;
  private get modal(): HTMLDivElement {
    return this.modaRef?.nativeElement;
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
