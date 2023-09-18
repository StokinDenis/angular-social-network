import {Component, forwardRef, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

const TEXTFIELD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextfieldComponent),
  multi: true
}

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [TEXTFIELD_VALUE_ACCESSOR]
})
export class TextfieldComponent implements ControlValueAccessor {
  public route = inject(Router)
  value: string = ''
  onTouched: any = () => {
    console.log(this.value)
    console.log('потеря фокуса')
    // this.route.navigate(['/contacts'])
  }
  onChange: any = () => {
  }

  writeValue(obj: any) {
    this.value = obj
    console.log('записал value')
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  public onValueChange(value: string): void {
    if (value === '123') {
      console.log('салас')
    }
  }
}
