import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FrameDetail } from '../frames-container/frames.service';

@Component({
  selector: 'app-frame-image',
  templateUrl: './frame-image.component.html',
  styleUrls: ['./frame-image.component.scss']
})
export class FrameImageComponent implements OnInit {
  @Input() frame: FrameDetail;
  @Output() onFrameSelection = new EventEmitter<FrameDetail>();

  constructor() { }

  ngOnInit(): void {
  }
}
