import { FieldArrayType } from '@ngx-formly/core'
import { Component } from '@angular/core'

@Component({
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" (click)="remove(i)">
          Remove
        </button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" (click)="add()">
        {{ to.addText }}
      </button>
    </div>
  `,
})
export class AdminUiFormFieldRepeatComponent extends FieldArrayType {
  //
}
