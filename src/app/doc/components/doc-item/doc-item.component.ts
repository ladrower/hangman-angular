import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocForm } from '../../services/doc-form.builder';
import * as fromDoc from '../../reducers';

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.css']
})
export class DocItemComponent implements OnInit {
  @Input() method: string;
  @Input() caption: string;
  @Input() endpoint: keyof fromDoc.DocState;
  @Input() busy: boolean;
  @Input() successMessage: string;
  @Input() errorMessage: string;
  @Input() docForm: DocForm;

  @Output() execute = new EventEmitter<keyof fromDoc.DocState>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.execute.emit(this.endpoint);
  }

}
