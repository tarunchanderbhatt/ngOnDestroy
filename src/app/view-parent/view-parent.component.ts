import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef
} from "@angular/core";
import { ViewChileComponent } from "./../view-chile/view-chile.component";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-view-parrent",
  templateUrl: "./view-parent.component.html",
  styleUrls: ["./view-parent.component.css"]
})
export class ViewParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChileComponent, { static: true })
  viewChild: ViewChileComponent;

  constructor(private cdref: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cdref.detectChanges();
  }
  isShow: boolean = true;
  private newMethod() {
    this.viewChild.title = "view ng  sadasdas";
  }

  showAndHide() {
    this.isShow = !this.isShow;
  }
}
