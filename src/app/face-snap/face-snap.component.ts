import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
      console.log(`J'ai snappé ${this.faceSnap.title}`);
      alert(`J'ai snappé ${this.faceSnap.title}`);
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
      console.log(`J'ai unsnappé ${this.faceSnap.title}`);
    }
  }
}
