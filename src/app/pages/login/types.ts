import { FormControl } from "@angular/forms";

export const enum Fields {
    Email = 'email',
    Password = 'password',
}

export interface FormType {
    [Fields.Email]: FormControl<string | null>;
    [Fields.Password]: FormControl<string | null>;
}
