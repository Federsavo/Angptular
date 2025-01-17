import {Component} from '@angular/core';

@Component({
  selector: 'app-paperopoli',
  imports: [],
  templateUrl: './paperopoli.component.html',
  standalone: true,
  styleUrl: './paperopoli.component.css'
})
export class PaperopoliComponent {
  playDuckSound(): void {
    const duckSound: HTMLAudioElement = document.getElementById('duckSound') as HTMLAudioElement;
    if (duckSound) {
      duckSound.play();
    }
  }
}
