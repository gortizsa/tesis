import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesisSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TesisSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class TesisHomeModule {}
