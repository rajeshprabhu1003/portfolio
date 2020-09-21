import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.appService.isHomeAnimation = false;
  }
  

}
