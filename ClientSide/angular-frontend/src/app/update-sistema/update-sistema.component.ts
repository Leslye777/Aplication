import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sistema } from '../models/sistema';
import { SistemaService } from '../sistema.service';


@Component({
  selector: 'app-update-sistema',
  templateUrl: './update-sistema.component.html',
  styleUrls: ['./update-sistema.component.css']
})
export class UpdateSistemaComponent implements OnInit {

  id!: number;
  sistema: Sistema = new Sistema();
  
  constructor(private sistemaService: SistemaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sistemaService.getSistemaById(this.id).subscribe(data => {
      this.sistema = data;
    }, error => console.log(error));
  }
  
  onSubmit(){
    this.sistemaService.UpdateSistema(this.id, this.sistema).subscribe(data =>{
      this.goToSistemaList();
    }, error => console.log(error));
  }

  goToSistemaList(){
    this.router.navigate(['/']);
  }

}
