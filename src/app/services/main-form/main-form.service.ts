import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MainFormService {
  private fb = inject(FormBuilder);

  public getForm(players: number): FormArray<FormArray<FormGroup>> {
    const CARDS = 60;
    const rounds = CARDS / players;
    const formArr = this.fb.array([this.createWishArray(players)]);

    while (formArr.length < rounds) {
      formArr.push(this.createWishArray(players));
    }

    return formArr;
  }

  private createWishArray(players: number) {
    const formArr = this.fb.array([
      this.createWishForm(),
      this.createWishForm(),
      this.createWishForm(),
    ]);

    while (formArr.length < players) {
      formArr.push(this.createWishForm());
    }

    return formArr;
  }

  createWishForm() {
    return this.fb.group({
      wish: ['', [Validators.required]],
      actual: ['', [Validators.required]],
    });
  }
}
