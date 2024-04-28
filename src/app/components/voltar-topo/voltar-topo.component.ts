import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-voltar-topo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './voltar-topo.component.html',
  styleUrl: './voltar-topo.component.scss'
})

export class VoltarTopoComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scroll > 0;
  }

  voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
