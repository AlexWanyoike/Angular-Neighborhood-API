import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  image1:string = 'assets/images/Untitled design (1).png'
  image2:string = 'assets/images/pexels-pixabay-267399.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
