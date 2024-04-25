import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BuscaComponent } from './components/busca/busca.component';
import { CardComponent } from './components/card/card.component';
import { InfoContentComponent } from './components/info-content/info-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BuscaComponent, CardComponent, InfoContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-and-morty';
}
