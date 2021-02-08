import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ActionType } from '../action-button/action-button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-image-pane',
  templateUrl: './image-pane.component.html',
  styleUrls: ['./image-pane.component.scss']
})
export class ImagePaneComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement> | null = null;
  @ViewChild('canvasContainer')
  private canvasContainerRef: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('modal')
  private modal: ModalComponent;

  private image: HTMLImageElement;
  private context2D: CanvasRenderingContext2D;
  private imgAngleInDegrees = 0;
  private imgPosX = 0; private imgPosY = 0;
  private imgWidth = 0; private imgHeight = 0;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }

  private get canvasContainer(): HTMLDivElement {
    return this.canvasContainerRef?.nativeElement;
  }

  get isImageSelected(): boolean {
    return this.image.src ? true : false;
  }
  imgWidthPx = 0; imgHeightPx = 0;

  constructor() {
    this.createImageEl();
  }

  resizeImage() {
    this.modal.close();
    this.imgWidth = this.imgWidthPx;
    this.imgHeight = this.imgHeightPx;
    this.resizeCanvas();
    this.drawImage();
  }

  private createImageEl() {
    this.image = document.createElement("img");

    this.image.onload = () => {
      this.imgWidth = this.image.width;
      this.imgHeight = this.image.height;

      this.imgWidthPx = this.imgWidth;
      this.imgHeightPx = this.imgHeight;
      this.resizeCanvas();
      this.drawImage();
    };

  }

  private clearCanvas() {
    console.log('clearCanvas');
    this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private clearImage() {
    this.clearCanvas();
    this.createImageEl();
    this.imgPosY = 0; this.imgPosX = 0;
  }

  private rotateImg(degrees: number) {
    this.clearCanvas();

    this.context2D.save();
    this.context2D.translate(this.imgWidth / 2, this.imgHeight / 2);
    this.context2D.rotate(degrees * Math.PI / 180);
    this.context2D.drawImage(this.image, -this.imgWidth / 2, -this.imgHeight / 2);
    this.context2D.restore();
  }

  private loadImageFile(files: any[]) {
    if (files.length > 1) {
      alert("Please choose only one file");
      return;
    }

    const file = files[0];
    if ((/\.(jpe?g|png)$/i).test(file.name) === false) {
      alert("Please choose a valid image file, allowed types are jpg,jpeg and png");
      return;
    }

    const FR = new FileReader();
    FR.addEventListener("load", (evt) => {
      this.image.src = evt.target.result.toString();
    });
    FR.readAsDataURL(file);
  }

  private drawImage() {
    this.clearCanvas();
    this.context2D.drawImage(this.image, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight);
  }

  private resizeCanvas() {
    this.canvas.width = this.imgWidth < this.canvasContainer.clientWidth ? this.canvasContainer.clientWidth : this.imgWidth;
    this.canvas.height = this.imgHeight < this.canvasContainer.clientHeight ? this.canvasContainer.clientHeight : this.imgHeight;

  }

  ngAfterViewInit(): void {
    this.context2D = this.canvas.getContext("2d");
  }

  performAction(actionType: ActionType) {
    switch (actionType) {
      case ActionType.ROTATE_LEFT:
        this.imgAngleInDegrees -= 90;
        this.rotateImg(this.imgAngleInDegrees);
        break;
      case ActionType.ROTATE_RIGHT:
        this.imgAngleInDegrees += 90;
        this.rotateImg(this.imgAngleInDegrees);
        break;
      case ActionType.CLEAR:
        if (confirm("Are you sure? you want to clear image?")) {
          this.clearImage();
        }
        break;
      case ActionType.RESIZE:
        // this.resizeImage();
        this.modal.open();
        break;
    }
  }

  onFileDrop(evt: { preventDefault: () => void; }) {
    evt.preventDefault();
  }

  onDrop(event: { preventDefault: () => void; dataTransfer: any }) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.loadImageFile(files);
  }

  onDragOver(event: { stopPropagation: () => void; preventDefault: () => void; }) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleFileInput(files: any[]) {
    this.loadImageFile(files);
  }

  moveImage(axis: 'x' | 'y', number: number) {
    if (axis === 'x') {
      this.imgPosX += number;
    } else {
      this.imgPosY += number;
    }

    this.drawImage();
  }

  @HostListener('keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'w':
        this.moveImage('y', -10);
        break;
      case 's':
        this.moveImage('y', 10);
        break;
      case 'a':
        this.moveImage('x', -10);
        break;
      case 'd':
        this.moveImage('x', 10);
        break;
    }
  }
}
