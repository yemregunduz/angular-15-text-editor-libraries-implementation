import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEditorComponent } from './text-editors/ngx-editor/ngx-editor.component';
import { KolkovAngularEditorComponent } from './text-editors/kolkov-angular-editor/kolkov-angular-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    NgxEditorComponent,
    KolkovAngularEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgxEditorModule.forRoot({
      locals: {
        bold: 'Kalın',
        italic: 'İtalik',
        code: 'Kod',
        underline: 'Altı çizili',
        strike: 'Üstü Çizili',
        blockquote: 'Blockquote',
        bullet_list: 'Madde İşaretli Liste',
        ordered_list: 'Sıralı Liste',
        heading: 'Başlıklar',
        h1: 'Başlık 1',
        h2: 'Başlık 2',
        h3: 'Başlık 3',
        h4: 'Başlık 4',
        h5: 'Başlık 5',
        h6: 'Başlık 6',
        align_left: 'Sola Yasla',
        align_center: 'Ortala',
        align_right: 'Sağa Yasla',
        align_justify: 'Justify',
        text_color: 'Yazı Rengi',
        background_color: 'Arka Plan Rengi',
        insertLink: 'Link Ekle',
        removeLink: 'Linki Sil',
        insertImage: 'Resim Ekle',
        url: 'URL',
        text: 'Yazı',
        openInNewTab: 'Yeni sekmede açılsın.',
        insert: 'Ekle',
        altText: 'Alt Yazı',
        title: 'Başlık',
        remove: 'Sil',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
