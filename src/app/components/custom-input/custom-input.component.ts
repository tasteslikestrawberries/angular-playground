import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      /* The forwardRef is only necessary when we have a circular 
      dependency between components or when the component is referenced 
      before it is defined: useExisting: forwardRef(() => CustomInputComponent), */
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
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
    // Implement this method if you want to support disabling the component
    // For example, you could add a disabled attribute to the component's template
  }
}
