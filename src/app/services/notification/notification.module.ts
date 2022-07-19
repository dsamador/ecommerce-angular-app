import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule>{
    return {
      ngModule: NotificationModule,
      providers: [
        NotificationService
      ]
    };
  }
}
