import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-neighborhood',
  templateUrl: './show-neighborhood.component.html',
  styleUrls: ['./show-neighborhood.component.css']
})
export class ShowNeighborhoodComponent implements OnInit {

  constructor(private service:SharedService) { }

  NeighborhoodList:any=[];

  ngOnInit(): void {
    this.refreshNeighborhoodList();
  }

  refreshNeighborhoodList(){
    this.service.getNeighborhoodList().subscribe(data=>{
      this.NeighborhoodList=data;
      // this.NeighborhoodListWithoutFilter=data;
    });
  }

}
