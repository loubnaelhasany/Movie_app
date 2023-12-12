import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListFilmsComponent } from "./list-films/list-films.component";
import { DetailFilmComponent } from "./detail-film/detail-film.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListFilmsComponent, DetailFilmComponent]
})
export class AppComponent {
  title = 'my-app';
}
