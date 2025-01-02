import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { InputComponent } from '../../components/shared/input/input.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fields, FormType } from './types';
import { TextareaComponent } from '../../components/shared/textarea/textarea.component';

@Component({
  selector: 'app-add-pokemon',
  imports: [MatIcon, NgIf, InputComponent, ReactiveFormsModule, TextareaComponent],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  file: File | null = null;
  previewURL: string | ArrayBuffer | null = null;
  addForm!: FormGroup<FormType>


  ngOnInit(): void {
    this.addForm = this.fb.group({
      [Fields.Name]: ['', Validators.required],
      [Fields.Description]: ['', Validators.required]
    })
  }

  getControl(name: string) {
    return this.addForm?.get(name) as FormControl;
  }

  onChange(event: any) {
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

  resetInput() {
    this.file = null;
    this.previewURL = null;
  }
}
