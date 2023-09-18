import {Component, forwardRef, Provider} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-color-picked',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './color-picked.component.html',
  styleUrls: ['./color-picked.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ColorPickedComponent),
      multi:true
    }
  ]
})
export class ColorPickedComponent implements ControlValueAccessor{

  value:string=''
  onChange(){
    console.log(this.value)
  }
  onTouched(){}
  writeValue(obj: any) {
    this.value=obj
  }
  registerOnChange(fn: any) {
    this.onChange=fn
  }
  registerOnTouched(fn: any) {
    this.onTouched=fn
  }
}
