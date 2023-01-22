import { Component ,OnInit,OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { Plugin, PluginKey } from 'prosemirror-state';
@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.scss']
})
export class NgxEditorComponent implements OnInit,OnDestroy {
  
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    const plugin = new Plugin({
      key: new PluginKey('plugin'),
    });
    this.editor = new Editor({
      history:false,
    });
    this.editor.registerPlugin(plugin)
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
