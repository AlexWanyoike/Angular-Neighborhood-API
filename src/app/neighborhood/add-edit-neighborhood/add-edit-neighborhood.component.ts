import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-neighborhood',
  templateUrl: './add-edit-neighborhood.component.html',
  styleUrls: ['./add-edit-neighborhood.component.css']
})
export class AddEditNeighborhoodComponent implements OnInit {

  constructor(private service:SharedService) { }

  // @Input() Neighborhood:any;
  // NeighborhoodName:string;
  // NeighborhoodOccupants_count:any;
  // NeighborhoodDescription:string;
  


  ngOnInit(): void {
    // this.NeighborhoodName=this.Neighborhood.NeighborhoodName;
    // this.NeighborhoodOccupants_count=this.Neighborhood.NeighborhoodOccupants_count;
    // this.NeighborhoodDescription=this.Neighborhood.NeighborhoodDescription

  }

}
