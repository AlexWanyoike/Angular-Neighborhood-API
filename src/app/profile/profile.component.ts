import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  image1:string = 'assets/images/Untitled design (1).png'

  constructor() { }

  ngOnInit(): void {
  }

}
