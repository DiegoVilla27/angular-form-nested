import { Component, inject, Input } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { ErrorMsgComponent } from "../error-msg/error-msg.component";
import { validations } from "./validations";

export const formGroupAddress = (_fb: FormBuilder): FormGroup => {
  return _fb.group({
    street: ["", [Validators.required]],
    city: ["", [Validators.required]],
    zip: ["", [Validators.required]]
  });
};

@Component({
  selector: "nested-form-address",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ErrorMsgComponent],
  templateUrl: "./form-address.component.html",
  styleUrl: "./form-address.component.scss",
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true, host: true })
    }
  ]
})
export class FormAddressComponent {
  @Input() formGroupName = "";
  @Input() form!: FormGroup;
  validations = validations;
}
