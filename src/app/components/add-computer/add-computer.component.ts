import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computer: Computer;
  marqueDispo = [];
  typeDispo = [];
  categorieDispo = [];

  constructor(private computerService: ComputerService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.computer = new Computer();
    this.computer.dateEntryStock = new Date();
    this.marqueDispo = this.computerService.marqueDispo;
    this.typeDispo = this.computerService.typeDispo;
    this.categorieDispo = this.computerService.categorieDispo;
  }

  onSubmit() {
    this.computerService.addComputer(this.computer).subscribe(then => { this.router.navigate(['/computers']); });
    this.toastrService.success('Ton ordinateur a été ajouté avec succès', 'Félicitations !');
  }

}
