import { Component, OnInit } from "@angular/core";
import Militar from "../../model/militar.class";
import { MilitarService } from "../../service/militar.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-militar-novo",
  templateUrl: "./militar-novo.component.html",
  styleUrls: ["./militar-novo.component.css"]
})
export class MilitarNovoComponent implements OnInit {
  militar = {} as Militar;

  constructor(
    private militarService: MilitarService,
    private toast: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit(event) {
    console.log(2);
    this.militar = event;
    this.militarService.store(this.militar).subscribe(
      res => {
        this.toast.success("Usuário criado com sucesso!", res.nome, {
          positionClass: "toast-top-center"
        });
      },

      error => {
       
      }
    );
  }
}
