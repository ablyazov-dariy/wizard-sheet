import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private form = this.createForm();

  get controls() {
    return this.form.controls;
  }

  public addPlayer() {
    if (this.form.length < 6)
      this.form.push(new FormControl('', Validators.required));
  }

  public removePlayer(index?: number) {
    index = index ?? this.form.length - 1;
    if (index >= 3) this.form.removeAt(index);
  }

  public reset() {
    this.form.reset();
  }

  private disable() {
    this.form.disable();
  }

  private enable() {
    this.form.enable();
  }

  private createForm() {
    return new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]);
  }
}
