import { Component, OnInit } from "@angular/core";
import $ from "jquery";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-suffer",
  templateUrl: "./suffer.component.html",
  styleUrls: ["./suffer.component.less"]
})
export class SufferComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}
  handleMenuOpenClick() {
    $(".menu")
      .stop(0)
      .fadeIn("fast");
  }
  handleMenuCloseClick() {
    $(".menu")
      .stop(0)
      .fadeOut("fast");
  }

  onSave($event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: "0px" }, 300);
  }

  ngOnInit(): void {
    const $this = this;
    window.onload = function() {
      setTimeout(() => {
        $this.spinner.hide();
      }, 1000);
    };
  }
}
