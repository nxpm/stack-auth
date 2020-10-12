import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUiFormField } from '@stack-auth/admin/ui-form'

@Component({
  template: `
    <auth-page #f [form]="form" [fields]="fields" pageTitle="Login" buttonTitle="Log in" (submit)="submit($event)">
      <a routerLink="/register" class="btn btn-outline-primary">Register</a>
    </auth-page>
  `,
})
export class LoginComponent {
  form = new FormGroup({})
  fields = [
    AdminUiFormField.email('email', { label: 'Email', required: true }),
    AdminUiFormField.password('password', { label: 'Password', required: true }),
  ]

  public submit(payload) {
    console.log(payload)
  }
}
