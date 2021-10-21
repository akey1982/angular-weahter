import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";

const MaterialModules = [MatCardModule, CommonModule,MatToolbarModule,MatInputModule,MatFormFieldModule ,MatIconModule ]

@NgModule({
  declarations: [],
  imports:MaterialModules,
  exports:MaterialModules
})
export class MaterialModule { }
