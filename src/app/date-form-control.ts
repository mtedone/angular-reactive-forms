import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: any, options: any) {
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }
    super.setValue(value, {
      ...options,
      emitModelToViewChange: true,
    });
  }
}
