import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trick } from '@interfaces/trick.interface';
import { FormControls } from '@interfaces/util/form-controls.type';
import { GameForm } from '@interfaces/game-form.type';

@Injectable({
  providedIn: 'root',
})
export class GameFormService {
  private fb = inject(FormBuilder);

  public initForm(form: GameForm, players: number, patchValue?: Trick[][]) {
    const CARDS = 60;
    const rounds = CARDS / players;

    let round = 1;

    while (form.length < rounds) {
      form.push(this.createTricksFormArray(players, round++), {
        emitEvent: form.length >= rounds - 1,
      });
    }

    if (patchValue) {
      form.patchValue(patchValue);
    }
  }

  private createTricksFormArray(players: number, round: number) {
    const formArr = this.fb.array([] as FormGroup<FormControls<Trick>>[]);

    while (formArr.length < players) {
      formArr.push(this.createTricksForm(round));
    }

    return formArr;
  }

  private createTricksForm(round: number) {
    return this.fb.group({
      tricksBid: [
        null,
        [
          Validators.min(0),
          Validators.pattern(/^(\d+|)$/),
          Validators.max(round),
        ],
      ],
      tricksWon: [
        null,
        [
          Validators.min(0),
          Validators.pattern(/^(\d+|)$/),
          Validators.max(round),
        ],
      ],
    }) as FormGroup<FormControls<Trick>>;
  }
}
