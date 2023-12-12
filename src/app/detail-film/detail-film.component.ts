import { Component, Input } from '@angular/core';
import { FilmItemComponent } from "../film-item/film-item.component";
import { Film } from '../film';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-film',
    standalone: true,
    templateUrl: './detail-film.component.html',
    styleUrl: './detail-film.component.css',
    imports: [FilmItemComponent,CommonModule]
})
export class DetailFilmComponent {
  @Input() film!:Film;
}
