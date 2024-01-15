import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {
  displayedColumns: string[] = ['Employee-id', 'Fromdate', 'Todate', 'Reason','Action'];
  dataSource! :MatTableDataSource<any>;
  // constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.displayleave();
  }
  displayleave() {
    throw new Error('Method not implemented.');
  }

  // displayleave(){
  //   // this.api.viewleave().subscribe({
  //   //   next:(res)=>{
  //   //     this.dataSource = new MatTableDataSource(res);
  //   //   }
  //   // })
  
  // }

  // //delete
  // delete(id:number){
  //  this.api.delete(id).subscribe(res=>{
  //   alert("Leave canceled successfully!!!")
  //   this.displayleave();
  //  })
  // }
}
