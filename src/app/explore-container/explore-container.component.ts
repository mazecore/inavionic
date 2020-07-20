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

  public user = {
                  login: '',
                  password: '',
                  numberOfLikes: 300,
                  tag: ''
                };
  public loading = false;
  public complete = null;
  constructor(private http: HttpClient) {}

  getHello() {
    if (this.validate()) {
      this.complete = null;
      this.loading = true;
      this.http.post(environment.apiUrl + '/update/', this.user).subscribe(data => {
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
  }

  ngOnInit() {
  }

  validate() {
    for (const [key, value] of Object.entries(this.user)) {
        console.log(key, value);
        if (value.toString().length < 1) {
           this.complete = `Please complete the ${key} field`;
           return false;
        }
    }
    return true;
  }

}
