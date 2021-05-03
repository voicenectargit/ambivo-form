import { FormControl, ValidationErrors } from '@angular/forms';

export const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export function UrlValidator(control: FormControl): ValidationErrors {
  return !control.value || urlRegex.test(control.value.trim())
    ? null
    : { url: true };
}
