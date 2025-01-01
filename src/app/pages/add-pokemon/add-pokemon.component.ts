import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-add-pokemon',
  imports: [MatIcon, NgIf],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent {
  file: File | null = null;
  previewURL: string | ArrayBuffer | null = null;

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log(file);
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
