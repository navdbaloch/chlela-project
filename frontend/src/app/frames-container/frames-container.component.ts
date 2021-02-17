import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FrameDetail, FramesService } from './frames.service';

@Component({
  selector: 'app-frames-container',
  templateUrl: './frames-container.component.html',
  styleUrls: ['./frames-container.component.scss']
})
export class FramesContainerComponent implements OnInit {
  frames: FrameDetail[] = [];
  @Output() onFrameSelection = new EventEmitter<FrameDetail>();

  constructor(private frameService: FramesService) { }

  ngOnInit(): void {
    this.frameService.getFrames().subscribe((frames) => {
      this.frames = frames;
    });
  }

}
