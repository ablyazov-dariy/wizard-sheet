import { Injectable } from '@angular/core';
import { GameConfig } from '@interfaces/game-config.interface';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { distinctUntilChanged, map, Observable, startWith, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControls } from '@interfaces/util/form-controls.type';

@Injectable({
  providedIn: 'root',
})
export class GameConfigService {
  public config$: Observable<GameConfig>;
  public form: FormGroup<FormControls<GameConfig>>;

  private readonly accessKey = 'GAME_CONFIG';

  constructor(
    private ls: LocalStorageService,
    private fb: FormBuilder,
  ) {
    this.form = this.getForm();
    this.patchStoredValue();
    this.config$ = this.formValueChanges$();
  }

  public reset(): void {
    this.form.reset();
    this.ls.removeItem(this.accessKey);
  }

  private formValueChanges$() {
    return this.form.valueChanges.pipe(
      map(() => this.form.getRawValue()),
      distinctUntilChanged(),
      tap(value => {
        this.ls.setItem(this.accessKey, value);
      }),
      startWith(this.form.getRawValue()),
    );
  }

  private getForm() {
    return this.fb.nonNullable.group({
      baseScore: 20,
      trickValue: 20,
      bidPenalty: 10,
      constantPenalty: 0,
    });
  }

  private patchStoredValue() {
    const storedConfig = this.ls.getItem<GameConfig>(this.accessKey);

    if (this.ls.handleStorageErrors<GameConfig>(storedConfig) && storedConfig) {
      this.form.patchValue(storedConfig);
    }
  }
}
