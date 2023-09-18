import {Component, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormsModule} from "@angular/forms";

const CHANGEDATA_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PageChangeDataUserComponent),
  multi: true
}

@Component({
  selector: 'app-page-change-data-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './change-data-user.component.html',
  styleUrls: ['./change-data-user.component.scss'],
  providers: [CHANGEDATA_VALUE_ACCESSOR],
})
export class PageChangeDataUserComponent implements ControlValueAccessor {

  value:string=''
  onChange=()=>{

  }
  onTouched:any=()=>{

  }
  writeValue:any=(obj: any)=>{
    this.value=obj
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouched=fn
  }

}
