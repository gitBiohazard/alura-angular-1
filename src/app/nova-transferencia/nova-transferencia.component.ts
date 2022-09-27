import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service: TransferenciaService, private router: Router) {  }

  @Output() aoTransferir = new EventEmitter<any>()


  valor: number
  destino: number

  transferir() {
    console.log('Solicitada nova transferência')
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }
    this.service.transferir(valorEmitir).subscribe((resultado) => {
      console.log(resultado)
      this.router.navigateByUrl('extrato')
    }, (error) => {
      console.log(error)
    })
  }

  ngOnInit(): void {

  }

}
