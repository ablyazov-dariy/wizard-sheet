import { FormControl } from '@angular/forms';

export type FormControls<T extends {}> = {
  [K in keyof T]: FormControl<T[K] | null>;
};
