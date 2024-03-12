import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Service } from 'src/service/services';

export interface DataElement {
  date:string;
  temp:string;
  description:string;
  main:string;
  pressure:number;
  humidity:number;

}

const ELEMENT_DATA: DataElement[] = [
  {
    date: '1/22/2024',
    temp: '75',
    description: 'sky is clear',
    main: 'clear', 
    pressure:1023.68,
    humidity:100
  }
]; 
@Component({
  selector: 'app-home-page',
 
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  searchScreen:boolean = true;
  searchCity:string ='';
  displayedColumns: string[] = [
    'date',
    'temp',
    'description',
    'main',
    'pressure',
    'humidity'
  ]
  dataSource = ELEMENT_DATA;

  constructor(public service:Service){}

  displayWeather(){

    console.log('searchCity', this.searchCity);

    this.service.getWeatherGeo().subscribe((data: any)=>{
      console.log('getWeatherGeo data', data)
    })
    this.searchScreen = false;
  }

  backScreenMain(){
    this.searchScreen = true;
  }
}
