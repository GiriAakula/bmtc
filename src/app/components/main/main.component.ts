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
      this.products = data;
    }) 
  }

  onSubmit(){
    this.selected = true;
    const title:any = this.search;    
    this.result = _.find(this.products, {"busRoute": isNaN(title) ? title.toLocaleUpperCase() : Number(title)})  
  }
}
