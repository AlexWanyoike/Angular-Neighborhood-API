import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-business',
  templateUrl: './show-business.component.html',
  styleUrls: ['./show-business.component.css']
})
export class ShowBusinessComponent implements OnInit {

  constructor(private service:SharedService) { }

  BusinessList:any=[];

  ngOnInit(): void {
    this.refreshBusinessList();
  }

  refreshBusinessList(){
    this.service.getBusinessList().subscribe(data=>{
      this.BusinessList=data;
      // this.NeighborhoodListWithoutFilter=data;
    });
  }


}
