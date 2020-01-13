import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export interface DocFormField {
  name: string;
  label: string;
  validators: ValidatorFn[];
}

export interface DocForm {
  fields: DocFormField[];
  form: FormGroup;
}

@Injectable()
export class DocFormBuilder {
  createDocForm(fields: DocFormField[]): DocForm {
    const group = fields.reduce((config, field) => {
      config[field.name] = new FormControl('', field.validators);
      return config;
    }, {});
    return {
      fields,
      form: new FormGroup(group)
    };
  }
}
