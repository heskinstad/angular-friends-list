import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFav(people: string) {
    if (this.favorites.indexOf(people) === -1) {
      this.favorites.push(people);
    }
  }

  isinFav(people: string) {
    if (this.favorites.indexOf(people) === -1) {
      return false;
    }
    return true;
  }

  deleteFav(people: string) {
    this.favorites = this.favorites.filter((p) => p !== people);
  }
}
