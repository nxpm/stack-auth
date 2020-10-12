import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'auth-page',
  template: `
    <div class="h-100 d-flex flex-column justify-content-center align-content-center">
      <div class="align-self-center">
        <div class="text-center pb-3" *ngIf="pageTitle">
          <h3>{{ pageTitle }}</h3>
        </div>
        <div class="card">
          <div class="card-body pb-0">
            <admin-ui-form #f [form]="form" [fields]="fields" [model]="model" (action)="submitForm()"></admin-ui-form>
          </div>
          <div class="p-3 d-flex justify-content-between">
            <div>
              <button type="submit" class="btn btn-outline-success" [disabled]="!form.valid" (click)="f.submit()">
                {{ buttonTitle }}
              </button>
            </div>
            <div>
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AuthPageComponent {
  @Input() buttonTitle: string
  @Input() form = new FormGroup({})
  @Input() fields = []
  @Input() model = {}
  @Input() pageTitle: string
  @Output() submit = new EventEmitter()

  public submitForm() {
    this.submit.next(this.model)
  }
}
