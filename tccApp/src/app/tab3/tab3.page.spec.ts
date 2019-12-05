import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { Transfer } from '@ionic-native/transfer';

import { Tab3Page } from './tab3.page';
import { WebView } from '@ionic-native/ionic-webview/ngx';
//import { HttpClient } from '@angular/common/http';
//import { FilePath } from '@ionic-native/file-path/ngx';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Page ],
      providers: [Camera, WebView],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
