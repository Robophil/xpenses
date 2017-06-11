import { Component, ElementRef, ViewChild, OnInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.css"],
})
export class HomeComponent implements OnInit {
  private page: Page;

  constructor(
    private zone: NgZone,
    private router: Router,
    ) {
    }

  ngOnInit() {
  }
}