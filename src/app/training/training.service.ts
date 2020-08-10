import { Subject } from 'rxjs/Subject'
import { Excercise } from "./excercise.model";
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import { map } from 'rxjs/operators'


@Injectable()
export class TrainingService {

    excerciseChanged = new Subject<Excercise>()
    excercisesChanged = new Subject<Excercise[]>()
    private availableExcercise: Excercise[] = []
    private runingExcercise: Excercise
    private exercises: Excercise[] = []

    constructor(private db: AngularFirestore) { }

    getAvailableExcercise() {
        this.db.collection('availableExercises')
            .snapshotChanges()
            .pipe(map(docArray => {
                return docArray.map(doc => {
                    console.log(doc.payload.doc.data())
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() as {}
                    }
                })
            }))
            .subscribe((exercises: Excercise[]) => {
                this.availableExcercise = exercises
                this.excercisesChanged.next([...this.availableExcercise])
            })
    }

    startExcercise(selectedId: string) {
        this.runingExcercise = this.availableExcercise.find(ex => ex.id == selectedId)
        this.excerciseChanged.next({ ...this.runingExcercise })

    }

    completeExcercise() {
        this.exercises.push({ ...this.runingExcercise, date: new Date(), state: 'completed' })
        this.runingExcercise = null;
        this.excerciseChanged.next(null)
    }

    cancelExcercise(progress: number) {
        this.exercises.push({
            ...this.runingExcercise,
            date: new Date(),
            duration: this.runingExcercise.duration * (progress / 100),
            calories: this.runingExcercise.duration * (progress / 100),
            state: 'cancalled'
        })
        this.runingExcercise = null;
        this.excerciseChanged.next(null)
    }

    getRunningExcercise() {
        return { ...this.runingExcercise }
    }

    getCompletedOrCancelledExcercise() {
        return this.exercises.slice()
    }

}