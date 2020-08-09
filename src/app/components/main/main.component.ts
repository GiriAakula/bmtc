import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  selected:boolean=false;
  result: any;
  search:string;
  constructor(private httpClient:HttpClient) { }
  products: any = [];
  
  
  ngOnInit(): void {
    this.httpClient.get("../../../assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    }) 
    console.log(this.result);
  }

  onSubmit(){
    this.selected = true;
    const title = this.search;
    console.log(title);
    this.result = _.find(this.products, ["busRoute", title.toUpperCase()])
    console.log(this.result);
  }
}
