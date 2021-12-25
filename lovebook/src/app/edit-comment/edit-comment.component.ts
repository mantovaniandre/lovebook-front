import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  showModalSuccess!: boolean;
  showModalFailure!: boolean; 

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
