import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

  get userName() {
    return this.user?.contact_info.name.formatted_name ||
      this.user?.contact_info.name.given_name;
  }

  get userExpirience() {
    return this.user?.experience || [];
  }

  hasExpirience() {
    return this.userExpirience.length > 0;
  }
}
