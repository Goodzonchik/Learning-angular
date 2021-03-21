import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { initSortedArray } from '@utils';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent implements ControlValueAccessor {
  @Input() itemsCount: number = 5;

  value: number;
  items: number[] = [];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.items = initSortedArray(this.itemsCount);
  }

  setRate(value: number) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: number): void {
    this.value = value;
    this.changeDetectorRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};
}
