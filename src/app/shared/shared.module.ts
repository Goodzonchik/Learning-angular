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
import { BooleanLiteralPipe } from './boolean-literal.pipe';

const angularModule = [CommonModule, HttpClientModule, RouterModule];
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
  BooleanLiteralPipe,
];

@NgModule({
  declarations: [...components, SpacexLogoComponent],
  imports: [...angularModule, ...taigaUi],
  exports: [...angularModule, ...taigaUi, components],
})
export class SharedModule {}
