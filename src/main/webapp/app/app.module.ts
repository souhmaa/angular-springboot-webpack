import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { HomeComponent } from './home/home.component'

import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        HomeModule
    ],
    declarations: [],
    bootstrap: [HomeComponent]
})
export class AppModule {}
