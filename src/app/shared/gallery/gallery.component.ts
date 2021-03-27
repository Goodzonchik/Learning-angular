import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  @Input() images: string[] = [];

  activeImage: number = 0;
  fullscreen: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  navigateNext(): void {
    if (this.activeImage + 1 < this.images.length && this.images.length > 0) {
      this.activeImage++;
    } else {
      this.activeImage = 0;
    }
    this.changeDetectorRef.detectChanges();
  }

  navigatePrev(): void {
    if (this.activeImage - 1 < 0 && this.images.length > 0) {
      this.activeImage = this.images.length - 1;
    } else {
      this.activeImage--;
    }
    this.changeDetectorRef.detectChanges();
  }

  selectImage(index: number): void {
    this.activeImage = index;
  }

  toggleFullscreen(): void {
    this.fullscreen = !this.fullscreen;
  }
}
