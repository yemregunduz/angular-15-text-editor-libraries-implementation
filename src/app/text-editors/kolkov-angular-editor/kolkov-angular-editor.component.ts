import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { KolkovAngularUploadImageService } from './kolkov-angular-upload-image.service';
@Component({
  selector: 'app-kolkov-angular-editor',
  templateUrl: './kolkov-angular-editor.component.html',
  styleUrls: ['./kolkov-angular-editor.component.scss'],
})
export class KolkovAngularEditorComponent {
  constructor(private uploadService: KolkovAngularUploadImageService) {}
  htmlContent: FormControl = new FormControl('');
  form = new FormGroup({
    htmlContent: new FormControl(''),
  });
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '85vh',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Yazmaya başlayın...',
    defaultParagraphSeparator: '--',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
        tag:'quote'
      },
      {
        name: 'Uyarı yazısı',
        class: 'text-danger',
      },
      {
        name: 'Başlık',
        class: 'title-text',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    upload: (file: File) => {
      return this.uploadService.uploadImageByAngularEditor(file);
    },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
    outline:false,
  };
}
