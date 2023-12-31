import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  loading: boolean = true;
  // isFlipped: boolean = false;

  @Input() isFlipped: boolean = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
  constructor(
    private dialog: MatDialog
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  
    }, 2000);  
  }

  abrirModal() {
    this.dialog
      .open(ModalComponent)
      .afterClosed()
      
  }
}
