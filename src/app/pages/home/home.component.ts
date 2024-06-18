import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {
  FormAddressComponent,
  formGroupAddress
} from "../../components/form-address/form-address.component";
import {
  FormBillComponent,
  formGroupBill
} from "../../components/form-bill/form-bill.component";
import { JsonPipe, NgStyle } from "@angular/common";
import { ErrorMsgComponent } from "../../components/error-msg/error-msg.component";
import { validations } from "./validations";

@Component({
  selector: "nested-home",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormAddressComponent,
    FormBillComponent,
    JsonPipe,
    NgStyle,
    ErrorMsgComponent
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {
  form!: FormGroup;
  validations = validations;

  constructor(private _fb: FormBuilder) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      address: formGroupAddress(this._fb),
      bill: formGroupBill(this._fb)
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) alert("Form valid!");
  }
}
