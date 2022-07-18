import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  users: any = [];

  constructor(private fetchData: FetchDataService) {}

  async ngOnInit() {
    this.users = await this.fetchData.fetchUsers();
  }

  hasUsers() {
    return this.users.length > 0;
  }
}
