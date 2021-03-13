import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiActionModule, TuiBreadcrumbsModule } from '@taiga-ui/kit';

import { HeaderComponent } from './header/header.component';
import { SpacexLogoComponent } from './header/spacex-logo/spacex-logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BooleanLiteralModule } from './boolean-literal';
import { ListBaseComponent } from './list-base/list-base.component';
import { ListButtonComponent } from './list-button/list-button.component';
import { ListButtonDirective } from './list-button/list-button.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './field-error/field-error.component';
import { ErrorsPipe } from './errors.pipe';
import { ObjectsKeysPipe } from './objects-keys.pipe';

const angularModule = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  BooleanLiteralModule,
  FormsModule,
  ReactiveFormsModule,
];
const taigaUi = [
  TuiFormatNumberPipeModule,
  TuiMoneyModule,
  TuiActionModule,
  TuiBreadcrumbsModule,
];
const components = [
  HeaderComponent,
  GalleryComponent,
  ListButtonComponent,
  FieldErrorComponent,
];
const directive = [ListButtonDirective];

@NgModule({
  declarations: [
    ...components,
    ...directive,
    SpacexLogoComponent,
    ListBaseComponent,
    ErrorsPipe,
    ObjectsKeysPipe,
  ],
  imports: [...angularModule, ...taigaUi],
  exports: [...angularModule, ...taigaUi, ...components, ...directive],
})
export class SharedModule {}
