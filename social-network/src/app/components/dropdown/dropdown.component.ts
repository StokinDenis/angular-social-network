import { CommonModule } from '@angular/common';
import {Component, forwardRef, Input, OnInit, Provider} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {Options} from "../../options";
import {publish} from "rxjs";

const DROPDOWN_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [DROPDOWN_VALUE_ACCESSOR],
})
export class DropdownComponent implements ControlValueAccessor, OnInit {

  @Input() options:Options[]=[]

  public selectedOption!:string
  ngOnInit() {
    this.selectedOption=this.options[0].label
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
