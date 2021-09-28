import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standings-info',
  templateUrl: './standings-info.component.html',
  styleUrls: ['./standings-info.component.css']
})
export class StandingsInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`])}

  ngOnInit(): void {
  }

}


