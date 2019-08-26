import { Component, OnInit } from "@angular/core";
import { OvertredingService } from "../overtreding.service";
import { Overtreding } from "../overtreding";
@Component({
  selector: "app-overtredings-list",
  templateUrl: "./overtredings-list.component.html",
  styleUrls: ["./overtredings-list.component.css"]
})
export class OvertredingsListComponent implements OnInit {
  overtreding: Overtreding[] = [];
  constructor(private _overtredingService: OvertredingService) {}

  ngOnInit() {
    this._overtredingService.getOvertredingen().subscribe(data => (this.overtreding = data));
  }
}
