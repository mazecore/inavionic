import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {


  @Input() name: string;
  public numberOfLikes = 300;
  public tag = '';
  constructor(private http: HttpClient) {}

  getHello() {
    this.http.post('http://localhost:8000/update/', {tag: this.tag, numberOfLikes: this.numberOfLikes})
  .subscribe(data => {

    console.log('data===>', data);
    // console.log(data.data); // data received by server
    // console.log(data.headers);

  } ,
   error => {

    console.log(error);
    // console.log(error.error); // error message as string
    // console.log(error.headers);

  });
  }

  ngOnInit() {
    // setInterval(() => {
    //   console.log(this.numberOfLikes);
    // }, 1000);
  }

}
