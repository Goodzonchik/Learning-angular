import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-loading-list',
  templateUrl: './lazy-loading-list.component.html',
  styleUrls: ['./lazy-loading-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyLoadingListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
