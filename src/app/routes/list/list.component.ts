import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface TodoRecord {
  text: string;
  isUrgent: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todolist: TodoRecord[];

  f = new FormGroup({
    text: new FormControl('', [Validators.required]),
    isUrgent: new FormControl(false)
  });

  constructor() { }

  ngOnInit() {
    this.todolist = [
      {
        text: 'Faire la vaisselle',
        isUrgent: false
      },
      {
        text: 'Déboucher les WC',
        isUrgent: true
      }
    ];
  }

  onSubmit() {
    console.log("test");
    this.todolist.push(this.f.value);
  }
}
