import {Component, forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {Options} from "../../options";


const DROPDOWN1_VALUE_ACCESSOR={
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=>Dropdopn1Component),
  multi:true
}
@Component({
  selector: 'app-dropdopn1',
  standalone: true,
  imports: [CommonModule,FormsModule, ],
  templateUrl: './dropdopn1.component.html',
  styleUrls: ['./dropdopn1.component.scss'],
  providers: [DROPDOWN1_VALUE_ACCESSOR]
})
export class Dropdopn1Component implements ControlValueAccessor{

  onChange:any=()=>{}

  public options:Options[]=[
    {label: 'developer'},
    {label: 'designer'},
    {label: 'manager'}
  ]
  public selectedOption=this.options[0].label
  onTouched:any=()=>{}
  writeValue(obj: any) {
    this.selectedOption=obj
  }

  registerOnTouched(fn: any) {
    this.onTouched=fn
  }

  registerOnChange(fn: any) {
    this.onChange=fn
  }
}
