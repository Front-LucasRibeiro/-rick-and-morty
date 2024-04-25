import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface InfoProps {
  textInfo: string;
  textSugest: string;
  buttonShow: boolean;
  buttonLink: string;
  buttonText: string;
}

@Component({
  selector: 'app-info-content',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './info-content.component.html',
  styleUrl: './info-content.component.scss'
})
export class InfoContentComponent {
  @Input() mensagem: InfoProps | undefined;
}
