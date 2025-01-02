import { FormControl } from "@angular/forms";

export const enum Fields {
    Name = 'name',
    Description = 'description',
    Ability1 = 'ability1',
    DescriptionAbility1 = 'descriptionAbility1',
    Ability2 = 'ability2',
    DescriptionAbility2 = 'descriptionAbility2',
    Ability3 = 'ability3',
    DescriptionAbility3 = 'descriptionAbility3',
}

export interface FormType {
    [Fields.Name]: FormControl<string | null>;
    [Fields.Description]: FormControl<string | null>;
    [Fields.Ability1]: FormControl<string | null>;
    [Fields.DescriptionAbility1]: FormControl<string | null>;
    [Fields.Ability2]: FormControl<string | null>;
    [Fields.DescriptionAbility2]: FormControl<string | null>;
    [Fields.Ability3]: FormControl<string | null>;
    [Fields.DescriptionAbility3]: FormControl<string | null>;
}