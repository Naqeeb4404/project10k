import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  constructor(){ }

  ngOnInit(): void {
    
  }
  all: number = 0;
  free: number = 0;
  premium: number = 0;

}
