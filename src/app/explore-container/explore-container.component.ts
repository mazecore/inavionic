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

  public user = {};
  public loading = false;
  public complete = null;
  constructor(private http: HttpClient) {}

  getHello() {
    this.complete = null;
    this.loading = true;
    this.http.post(environment.apiUrl + '/update/', this.user)
  .subscribe(data => {
    this.loading = false;
    console.log('data===>', data);
    this.complete = 'Liking is complete!';

  } ,
   error => {
    this.loading = false;
    this.complete = 'There was an error';
    console.log(error);

  });
  }

  ngOnInit() {
    this.user.numberOfLikes = 300;
  }

}
