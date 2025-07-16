import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private ui: UiService) {}

  scrollToSobre() {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  }

  irParaLogin(index: number) {
    this.ui.setModo(index); // 0 = login, 1 = criar conta
  }
}
