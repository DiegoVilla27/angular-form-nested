import { Component, inject, Input } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { validations } from "./validations";
import { ErrorMsgComponent } from "../error-msg/error-msg.component";

export const formGroupBill = (_fb: FormBuilder): FormGroup => {
  return _fb.group({
    street: ["", [Validators.required]],
    city: ["", [Validators.required]],
    zip: ["", [Validators.required]]
  });
};

@Component({
  selector: "nested-form-bill",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ErrorMsgComponent],
  templateUrl: "./form-bill.component.html",
  styleUrl: "./form-bill.component.scss",
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true, host: true })
    }
  ]
})
export class FormBillComponent {
  @Input() formGroupName = "";
  @Input() form!: FormGroup;
  validations = validations;
}
