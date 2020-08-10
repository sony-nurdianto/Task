import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs'
import { Excercise } from '../excercise.model';
// import { map } from 'rxjs/operators'

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  excercises: Excercise[];
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.excercisesChanged.subscribe(excercises => (this.excercises = excercises))
    this.trainingService.getAvailableExcercise()
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExcercise(form.value.excercise)
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe()
  }

}
