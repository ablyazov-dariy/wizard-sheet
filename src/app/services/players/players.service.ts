import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

import { LocalStorageService } from '@services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  public form = new FormArray<FormControl>([]);

  private readonly accessKey = 'NAMES';

  constructor(private ls: LocalStorageService) {
    this.initForm();
  }

  public addPlayer(): void {
    if (this.form.length < 6)
      this.form.push(new FormControl('', Validators.required));
  }

  public removePlayer(): void {
    const index = this.form.length - 1;
    if (index >= 3) this.form.removeAt(index);
  }

  public disable(): void {
    this.form.disable();
  }

  public enable(): void {
    this.form.enable();
  }

  public isValid(): boolean {
    return this.form.valid;
  }

  public reset(): void {
    this.form.reset();
    this.ls.removeItem(this.accessKey);
  }

  public saveNames() {
    this.ls.setItem(this.accessKey, this.form.value);
  }

  private initForm() {
    const storedNames = this.ls.getItem<string[]>(this.accessKey);

    if (this.ls.handleStorageErrors<string[]>(storedNames) && storedNames) {
      storedNames.forEach(name => {
        this.form.push(new FormControl(name, Validators.required));
      });
    }

    while (this.form.length < 3) {
      this.form.push(new FormControl('', Validators.required));
    }
  }
}
