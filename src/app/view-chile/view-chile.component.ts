import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-child",
  templateUrl: "./view-chile.component.html",
  styleUrls: ["./view-chile.component.css"]
})
export class ViewChileComponent {
  title: string = "view Title";
  constructor() {
    this.title = "Constructor Title";
  }

  onClick() {
    this.title = "Change Title onClick";
  }

  ngOnDestroy() {
    console.log("ngOnDestroy(): Before view child close ");
  }
}
