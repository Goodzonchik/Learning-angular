import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiActionModule, TuiBreadcrumbsModule } from '@taiga-ui/kit';

import { LazyLoadingListComponent } from './lazy-loading-list/lazy-loading-list.component';
import { HeaderComponent } from './header/header.component';
import { SpacexLogoComponent } from './header/spacex-logo/spacex-logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestComponent } from './test/test.component';
import { BooleanLiteralModule } from './boolean-literal';

const angularModule = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  BooleanLiteralModule,
];
const taigaUi = [
  TuiFormatNumberPipeModule,
  TuiMoneyModule,
  TuiActionModule,
  TuiBreadcrumbsModule,
];
const components = [
  LazyLoadingListComponent,
  HeaderComponent,
  GalleryComponent,
];

@NgModule({
  declarations: [...components, SpacexLogoComponent, TestComponent],
  imports: [...angularModule, ...taigaUi],
  exports: [...angularModule, ...taigaUi, components],
})
export class SharedModule {}
