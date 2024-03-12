import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  selector: 'app-weather-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})

export class WeatherPageComponent {
  displayedColumns: string[] = [
    'date',
    'temp',
    'description',
    'main',
    'pressure',
    'humidity'
  ]
  dataSource = ELEMENT_DATA;
}