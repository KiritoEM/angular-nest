import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { InputComponent } from '../../components/shared/input/input.component';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fields, FormType } from './types';
import { TextareaComponent } from '../../components/shared/textarea/textarea.component';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { POKEMON_AVALAIBLE_TYPES } from '../../helpers/constants';
import { AddPokemonService } from './add-pokemon.service';
import { AddPokemonDTO } from './add-pokemon.dto';

@Component({
  selector: 'app-add-pokemon',
  imports: [MatIcon, NgIf, NgFor, InputComponent, ReactiveFormsModule, TextareaComponent, ButtonComponent, NgStyle],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent implements OnInit {

  constructor(private fb: FormBuilder, private addPokemonService: AddPokemonService) { }

  file: File | null = null;
  previewURL: string | ArrayBuffer | null = null;
  addForm!: FormGroup<FormType>
  abilities: number[] = [0, 1, 2];
  types: Record<string, string> = POKEMON_AVALAIBLE_TYPES;
  typeColorMap: Record<string, string> = POKEMON_AVALAIBLE_TYPES;

  getTypesArray() {
    return Object.keys(this.types);
  }


  ngOnInit(): void {
    this.addForm = this.fb.group({
      [Fields.Name]: ['', Validators.required],
      [Fields.Description]: ['', Validators.required],
      [Fields.Ability1]: ['', Validators.required],
      [Fields.DescriptionAbility1]: ['', Validators.required],
      [Fields.Ability2]: ['', Validators.required],
      [Fields.DescriptionAbility2]: ['', Validators.required],
      [Fields.Ability3]: ['', Validators.required],
      [Fields.DescriptionAbility3]: ['', Validators.required],
      types: this.fb.array([])
    });
  }

  getControl(name: string) {
    return this.addForm?.get(name) as FormControl;
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;

      const reader = new FileReader();

      reader.onload = () => {
        this.previewURL = reader.result;
      }

      reader.readAsDataURL(file);
    }

  }

  onCheckboxChange(event: any) {
    const typesArray = this.addForm.get('types') as FormArray;

    if (event.target.checked) {
      typesArray.push(new FormControl(event.target.value, [Validators.required]));
    }
    else {
      const index = typesArray.controls.findIndex(control => control.value === event.target.value);

      if (index !== -1) {
        typesArray.removeAt(index);
      }
    }
  }

  resetInput() {
    this.file = null;
    this.previewURL = null;
  }

  onSubmit() {
    if (!this.file) {
      alert("Pas d'image téléchargé !!!");
    }

    if (this.addForm?.valid && this.file) {
      this.addPokemonService.addPokemon(this.addForm?.value as AddPokemonDTO, this.file).subscribe({
        next: (data) => {
          this.addForm.reset();
          this.resetInput();
          alert("Pokemon ajouté avec succés !!!");
        },
        error: (err) => {
          alert("Le pokemon existe déja !!!");
          console.error(err);
        }
      }
      )
    }
  }

  getTypeColor(type: string) {
    return this.typeColorMap[type.toLowerCase()] || "#A8A77A";
  }
}
