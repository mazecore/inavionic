import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {


  @Input() name: string;
  public numberOfLikes = 300;
  public tag = '';
  public loading = false;
  public complete = null;
  constructor(private http: HttpClient) {}

  getHello() {
    this.complete = null;
    this.loading = true;
    this.http.post(environment.apiUrl + '/update/', {tag: this.tag, numberOfLikes: this.numberOfLikes})
  .subscribe(data => {
    this.loading = false;
    console.log('data===>', data);
    this.complete = 'Liking is complete!';
    // console.log(data.data); // http://54.175.162.21:8000/update
    // console.log(data.headers); http://localhost:8000/update/

  } ,
   error => {
    this.loading = false;
    this.complete = 'There was an error';
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
