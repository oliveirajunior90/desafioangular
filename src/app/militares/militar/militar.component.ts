import { Component, OnInit } from "@angular/core";
import { MilitarService } from "../../service/militar.service";
import Militar from "../../model/militar.class";

@Component({
  selector: "app-militar",
  templateUrl: "./militar.component.html",
  styleUrls: ["./militar.component.css"]
})
export class MilitarComponent implements OnInit {
  militares: Array<Militar>;

  constructor(private militarService: MilitarService) {}

  ngOnInit() {
    this.militarService.index().subscribe(militares => {
      this.militares = militares;
    });
  }

  delete(id: number, index) {
    this.militarService.delete(id).subscribe(response => {
      this.militares.splice(index, 1);
    });
  }
}
