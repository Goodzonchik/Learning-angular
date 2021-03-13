import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  TuiRootModule,
  TuiNotificationsModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { iconsPathFactory, TUI_ICONS_PATH } from '@taiga-ui/core';

import { SharedModule, AppPreloadingStrategy } from '@shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
    AppPreloadingStrategy,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
