import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TrainingComponent implements OnInit {

  onGoingTraining = false
  excerciseSubscription: Subscription

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.excerciseSubscription = this.trainingService.excerciseChanged.subscribe(excercise => {
      if (excercise) {
        this.onGoingTraining = true
      } else {
        this.onGoingTraining = false
      }
    })
  }

}
