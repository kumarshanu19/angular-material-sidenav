import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { OpenSidebarOnSwipeDirective } from './open-sidebar-on-swipe.directive';
import { SidebarSwipeService } from './sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';
import { ContainerComponent } from './container/container.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    OpenSidebarOnSwipeDirective,
    SetGetWidthSidebarPipe,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [SidebarSwipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
