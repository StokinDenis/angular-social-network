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
})
export class ColorPickedComponent{

  value:string='#000000'
  onChange(){
    console.log(this.value)
  }


}
