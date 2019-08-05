import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedBtn:string;

  constructor() { }

  onSelected(btnName:string) {
    this.selectedBtn =btnName;
  }

  isActive(btnName:string) {
    return this.selectedBtn == btnName;
  }

  ngOnInit() {
    this.selectedBtn = 'All';
  }

}
