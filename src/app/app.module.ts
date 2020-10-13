import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { AppConfigToken, buildAppConfig } from './app.config';

import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
    { provide: AppConfigToken, useValue: buildAppConfig() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
