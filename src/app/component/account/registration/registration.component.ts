import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FormGroup, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
