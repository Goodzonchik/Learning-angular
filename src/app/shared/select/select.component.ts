import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { emptyFunction } from '@types';
import { checkStringInclude } from '@utils';

export type SelectModel = {
  id: number;
  value: string;
};

@Component({
  selector: 'space-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @ViewChild('selectInput') selectInput: ElementRef;

  @Input() items: readonly SelectModel[] = [];
  @Input() notFoundMessage: string = 'Not found elements';

  filteredItems: SelectModel[] = [];
  value: SelectModel | null = null;
  disabled: boolean = false;
  searchString: string = '';
  isOpen: boolean = false;

  private onTouched = emptyFunction;
  private onChange = emptyFunction;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly elementRef: ElementRef<HTMLDivElement>
  ) {}

  ngOnInit(): void {
    this.filteredItems = [...this.items];
  }

  @HostListener('focus')
  onFocus(): void {
    this.selectInput.nativeElement.focus();
    this.isOpen = true;
    this.search();
  }

  onBlur(): void {
    this.isOpen = false;
    this.searchString = this.value?.value;
  }

  @HostListener('document:click', ['$event'])
  @HostListener('blur', ['event'])
  clickout(event: Event) {
    if (
      !event ||
      (event?.target instanceof Element &&
        !this.elementRef.nativeElement.contains(event?.target))
    ) {
      this.onBlur();
    }
  }

  search() {
    this.filteredItems = this.items.filter((item) =>
      checkStringInclude(item.value, this.searchString)
    );
  }

  select(item: SelectModel) {
    this.value = item;
    this.searchString = item.value;
    this.isOpen = false;
    this.onChange(this.value);
    this.onTouched();
  }

  clear() {
    this.value = null;
    this.searchString = '';
    this.filteredItems = [...this.items];
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: SelectModel | null): void {
    this.value = value;
    this.changeDetectorRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
