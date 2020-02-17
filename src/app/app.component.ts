import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';




export default class Editor extends ClassicEditor { }



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ckeditor-angular';
  public Editor = ClassicEditor;

  public data = "<b>HELLO WORLD</b>"


}




