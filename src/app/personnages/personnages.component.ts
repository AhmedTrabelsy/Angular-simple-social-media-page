import { Component } from '@angular/core';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent {

  characters = [
    { id: '0', name: 'Laugh', image: 'assets/avataaars.png', icon: 'fa-solid fa-face-laugh', isMajor: true, followers: 44 },
    { id: '1', name: 'Blink', image: 'assets/avataaars (1).png', icon: 'fa-solid fa-face-laugh-wink', isMajor: false, followers: 12 },
    { id: '2', name: 'Lovely', image: 'assets/avataaars (2).png', icon: 'fa-solid fa-face-laugh-beam', isMajor: true, followers: 16 }
  ];

  followings: string[] = [];

  aboonner(characterIndex: number) {
    const character = this.characters[characterIndex];

    if (!this.followings.includes(character.id)) {
      this.followings.push(character.id);
      character.followers++;
    }
  }

  desabonner(characterIndex: number) {
    const character = this.characters[characterIndex];
    const characterIndexToRemove = this.followings.findIndex((c: any) => c.id === character.id);

    if (this.followings.includes(character.id)) {
      this.followings.splice(characterIndexToRemove, 1);
      character.followers--;
    }
  }

  isSubscribed(characterIndex: number): boolean {
    const character = this.characters[characterIndex];

    if (this.followings.includes(character.id)) {
      return false;
    }
    return true;
  }
}
