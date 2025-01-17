import { FormArray, FormGroup } from '@angular/forms';
import { FormControls } from '@interfaces/util/form-controls.type';
import { Trick } from '@interfaces/trick.interface';

export type GameForm = FormArray<FormArray<FormGroup<FormControls<Trick>>>>;
