import { Component, OnInit } from "@angular/core";
import Militar from "../../model/militar.class";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import { MilitarService } from "../../service/militar.service";
import { Toast, ToastrService } from "ngx-toastr";

@Component({
  selector: "app-militar-editar",
  templateUrl: "./militar-editar.component.html",
  styleUrls: ["./militar-editar.component.css"]
})
export class MilitarEditarComponent {
  private inscricao: Subscription;
  private militar: Militar;

  constructor(
    private route: ActivatedRoute,
    private militarService: MilitarService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.data.subscribe((info: { militar: Militar }) => {
      this.militar = info.militar;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit(event) {
    this.militarService.put(event.id, event).subscribe(
      data => {
        this.toast.success("Usuário editado com sucesso!", this.militar.nome, {
          positionClass: "toast-top-center"
        });
      },

      error => {}
    );
  }
}
