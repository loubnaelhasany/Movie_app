import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Film } from '../film';
import { EventEmitterAsyncResource } from 'node:events';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
@Input() film! :Film ; 
@Output() filmSelected = new EventEmitter<Film>();
clickedFilm(){
  this.filmSelected.emit(this.film);
}
}
