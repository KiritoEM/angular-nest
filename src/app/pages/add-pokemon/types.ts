import { FormControl } from "@angular/forms";

export const enum Fields {
    Name = 'name',
    Description = 'description',
}

export interface FormType {
    [Fields.Name]: FormControl<string | null>;
    [Fields.Description]: FormControl<string | null>;
}
