import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiService } from '../../shared/services/ui.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from "../../shared/header/header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HeaderComponent,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modoIndex = 0;
  mostrarSenha = false;
  mostrarConfirmacao = false;
  centralizado = false;

  constructor(private ui: UiService) {}

  ngOnInit(): void {
    this.ui.modoIndex$.subscribe(index => {
      if (index !== null) {
        this.modoIndex = index;
        this.centralizarCard();
      }
    });
  }

  centralizarCard() {
    this.centralizado = true;
  }

  voltarLayout() {
    this.centralizado = false;
  }

  logar() {
    console.log('Login enviado');
  }

  criarConta() {
    console.log('Criar conta enviado');
  }
}
