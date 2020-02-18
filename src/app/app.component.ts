import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ckeditor-angular';

  public Editor = ClassicEditor;

  // Data binding with placeholder:
  public data = "Start writing...";


}




