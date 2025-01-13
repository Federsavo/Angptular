import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PippoNeiGuaiComponent} from './components/pippo-nei-guai/pippo-nei-guai.component';
import {PaperopoliComponent} from './components/paperopoli/paperopoli.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PippoNeiGuaiComponent, PaperopoliComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'Angptular';
}
