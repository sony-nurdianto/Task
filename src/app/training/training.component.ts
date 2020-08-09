import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TrainingComponent implements OnInit {

  onGoingTraining = false

  constructor() { }

  ngOnInit(): void {
  }

}
