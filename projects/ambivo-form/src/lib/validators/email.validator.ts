import { FormControl, ValidationErrors } from '@angular/forms';

export function checkEmail(email: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
export function CustomEmailValidator({ value }: FormControl): ValidationErrors {
  return !value || checkEmail(value) ? null : { email: true };
}
