import { Component, ElementRef, ViewChild, OnInit, NgZone } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"

@Component({
  moduleId: module.id,
  selector: "info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.css"],
})
export class InfoComponent implements OnInit {
  public title = "Info";
  private page: Page;

  constructor(
    private zone: NgZone,
    private router: Router,
    ) {
    }

  ngOnInit() {
  }
}
