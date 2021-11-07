import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  myArr = [
    { type: 'fruit', name: 'apple', price: 5 },
    { type: 'vegetable', name: 'tomato', price: 4 },
    { type: 'dairy', name: 'milk', price: 6 },
  ];

  //data: any = [];

  constructor(private http: HttpClient) {}

  addElementsToArray = () => {
    this.myArr.push({ type: 'fruit', name: 'apple', price: 10 });
    console.log(this.myArr);
  };

  /*postData() {
    this.http.post('someurl.com/posts.json', postData).subscribe((data) => {
      console.log(data);
    });
  }*/

  /*getData() {
    this.http.get('https://randomuser.me/api').subscribe((data) => {
      console.log(data);
    });
  }*/

  ngOnInit(): void {
  }
}
