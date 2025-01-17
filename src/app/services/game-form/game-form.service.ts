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

    while (form.length < rounds) {
      form.push(this.createTricksFormArray(players), {
        emitEvent: form.length >= rounds - 1,
      });
    }

    if (patchValue) {
      form.patchValue(patchValue);
    }
  }

  private createTricksFormArray(players: number) {
    const formArr = this.fb.array([] as FormGroup<FormControls<Trick>>[]);

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
