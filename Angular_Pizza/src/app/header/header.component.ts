import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   menuOpened = false;  // Variable to control the menu state

  // Toggle the menu open and close
  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
