import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { RotateMethodComponent } from './rotate-method/rotate-method.component';
import {CommonMethodsService} from './services/commonMethods';
import { DeDuplicateComponent } from './de-duplicate/de-duplicate.component';
import { FindCharNNComponent } from './find-char-nn/find-char-nn.component';
import { FindCharNComponent } from './find-char-n/find-char-n.component';
import { LeastCommonMultipleComponent } from './least-common-multiple/least-common-multiple.component';
import { LeastCommonMultipleByArrayComponent } from './least-common-multiple-by-array/least-common-multiple-by-array.component'
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    RotateMethodComponent,
    DeDuplicateComponent,
    FindCharNNComponent,
    FindCharNComponent,
    LeastCommonMultipleComponent,
    LeastCommonMultipleByArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
