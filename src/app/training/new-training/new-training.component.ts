import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Excercise } from '../excercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>()
  excercises: Excercise[] = []

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {

    this.excercises = this.trainingService.getAvailableExcercise()

  }

  onStartTraining() {
    this.trainingStart.emit()
  }

}
