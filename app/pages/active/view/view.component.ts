import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, NgZone } from "@angular/core";
// import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Page } from 'ui/page'
import { topmost } from "ui/frame"
import { SlidesModule } from 'nativescript-ngx-slides';
import { SlidesComponent } from 'nativescript-ngx-slides/slides/app/slides/slides.component';
import { CycleInterface } from '../../../models/cycle.model';
import { Store } from "@ngrx/store";
import { AppState, getCyclesData } from "../../../reducers";
import { CyclesActions } from "../../../actions/cycles.action";

const transition = { name: "slide", duration: 300 };

@Component({
  moduleId: module.id,
  selector: "active-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.css"],
})
export class ActiveViewComponent implements OnInit, AfterViewInit {
  public page: Page;
  public data$: Observable<CycleInterface[]>;
  public slides: SlidesComponent;

  constructor(
    private store: Store<AppState>,
    private router: RouterExtensions,
    private actions: CyclesActions,
  ) {
    this.data$ = this.store.let(getCyclesData());
  }

  openCycle() {
    console.log('open');
    this.router.navigateByUrl('/active/open/', { transition });
  }

  createExpense({ id, amount, category }) {
    this.store.dispatch(this.actions.add_category({ id, amount, category }));
  }

  ngOnInit(){
  }

  ngAfterViewInit() { }
}
