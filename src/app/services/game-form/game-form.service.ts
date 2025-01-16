import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trick } from '@interfaces/trick.interface';
import { FormControls } from '@interfaces/util/form-controls.type';

@Injectable({
  providedIn: 'root',
})
export class GameFormService {
  private fb = inject(FormBuilder);

  public initForm(players: number, patchValue?: Trick[][]) {
    const CARDS = 60;
    const rounds = CARDS / players;
    const formArr = this.fb.array([this.createTricksFormArray(players)]);

    while (formArr.length < rounds) {
      formArr.push(this.createTricksFormArray(players));
    }

    if (patchValue) {
      formArr.patchValue(patchValue);
    }

    return formArr;
  }

  private createTricksFormArray(players: number) {
    const formArr = this.fb.array([
      this.createTricksForm(),
      this.createTricksForm(),
      this.createTricksForm(),
    ]);

    while (formArr.length < players) {
      formArr.push(this.createTricksForm());
    }

    return formArr;
  }

  private createTricksForm() {
    return this.fb.group({
      tricksBid: [null, [Validators.min(0), Validators.pattern(/^\d+$/)]],
      tricksWon: [null, []],
    }) as FormGroup<FormControls<Trick>>;
  }
}
