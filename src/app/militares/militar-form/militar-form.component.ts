import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import Militar from "../../model/militar.class";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-militar-form",
  templateUrl: "./militar-form.component.html",
  styleUrls: ["./militar-form.component.css"]
})
export class MilitarFormComponent implements OnInit {
  private inscricao: Subscription;
  private formMudou: boolean = false;
  private militarForm: FormGroup;
  
  @Input()
  militar: Militar;
  @Input()
  pagina: String;
  @Output()
  militarOutput: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    const id = this.militar.id ? this.militar.id : null;
    const nome = this.militar.nome ? this.militar.nome : null;
    const identidade = this.militar.identidade ? this.militar.identidade : null;
    const nascimento = this.militar.nascimento ? this.militar.nascimento : null;
    const servicoObrigatorio = this.militar.servicoObrigatorio
      ? this.militar.servicoObrigatorio
      : 0;
    const patente = this.militar.nome ? this.militar.patente : null;

    this.militarForm = this.fb.group({
      id: new FormControl(id),
      nome: new FormControl(nome, [Validators.required]),
      identidade: new FormControl(identidade, [Validators.required]),
      nascimento: new FormControl(nascimento, [Validators.required]),
      servicoObrigatorio: new FormControl(servicoObrigatorio),
      patente: new FormControl(patente, [Validators.required])
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(field: string) {
    return (
      !this.militarForm.get(field).valid && this.militarForm.get(field).touched
    );
  }

  changeStatus() {
    this.formMudou = true;
  }


  onSubmit() {
    this.militarForm.value.servicoObrigatorio = (this.militarForm.value.servicoObrigatorio)
    if (this.militarForm.valid && this.formMudou) {
      this.militarOutput.emit(this.militarForm.value);
      if (this.pagina == "novo") this.militarForm.reset();
    } else {
      this.validateAllFormFields(this.militarForm);
    }
  }
}
