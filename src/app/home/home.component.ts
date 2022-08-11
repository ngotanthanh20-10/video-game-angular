import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public sort: string;
  // public games: Array<Game>;
  // private routeSub: Subscription;
  // private gameSub: Subscription;
  
  constructor() { }

  ngOnInit(): void {
  }

}
