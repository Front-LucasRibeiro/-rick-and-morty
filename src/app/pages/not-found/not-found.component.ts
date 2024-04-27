import { Component } from '@angular/core';
import { InfoContentComponent } from '../../components/info-content/info-content.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [InfoContentComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})

export default class NotFoundComponent {
  titlePage = 'Página não encontrada'
  mensagemInfo = {
    textInfo: 'Nada foi encontrado',
    textSugest: 'Utilize o menu para realizar a navegação, ou realize uma busca',
    buttonShow: true,
    buttonLink: '/',
    buttonText: 'Voltar ao início'
  }
}
