import { FormControl, ValidationErrors } from '@angular/forms';

export function checkEmail(email: string): boolean {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    email
  );
}
export function CustomEmailValidator({ value }: FormControl): ValidationErrors {
  return !value || checkEmail(value) ? null : { email: true };
}
