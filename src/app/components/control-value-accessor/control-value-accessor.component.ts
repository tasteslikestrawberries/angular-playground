import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-control-value-accessor',
    templateUrl: './control-value-accessor.component.html',
    styleUrls: ['./control-value-accessor.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* The forwardRef is only necessary when we have a circular
            dependency between components or when the component is referenced
            before it is defined: useExisting: forwardRef(() => CustomInputComponent), */
            useExisting: ControlValueAccessorComponent,
            multi: true,
        },
    ],
    standalone: true,
    imports: [FormsModule],
})
export class ControlValueAccessorComponent implements ControlValueAccessor {
  /* onChange/onTouched is empty function by default, to avoid errors 
  when it is called before registerOnChange / registerOnTouched */
  onChange = (ev: any) => {};
  onTouched = () => {};

  input!: string;

  writeValue(value: string) {
    this.input = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    // not yet implemented
  }
}
