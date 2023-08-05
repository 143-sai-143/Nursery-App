import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allDoctors:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:3333/doctor/all");
    res.subscribe(
      data=>this.allDoctors=data
    );

  }

  delteUser(id:string): void{
console.log(id);
let res = this.http.get("http://localhost:3333/doctor/delete?id="+id);
    res.subscribe(
      data=>this.allDoctors=data
    );
  }

}
