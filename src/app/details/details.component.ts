import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  image1:string = 'assets/images/Untitled design (1).png'
  constructor() { }

  ngOnInit(): void {
  }

}
