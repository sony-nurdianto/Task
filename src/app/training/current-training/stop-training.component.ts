
import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
    selector: 'app-stop-training',
    template: `
    <h1 mat-dialog-title>Are You sure ?</h1>
    <mat-dialog-content>
        <p>You Already Got {{passedData.progress}}</p> 
    </mat-dialog-content>
    <mat-dialog-actions>
    <button mat-raised-button color="accent" [mat-dialog-close]="true">Yes</button>
    <button mat-raised-button color="warn" [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {

    }
}