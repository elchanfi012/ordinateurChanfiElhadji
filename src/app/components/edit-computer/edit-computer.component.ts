import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { ToastrService } from 'ngx-toastr';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  computer: Computer;
  marqueDispo = [];
  typeDispo = [];
  categorieDispo = [];
  isLoading: boolean;
  faSpinner = faSpinner;
  constructor(private activatedRoute: ActivatedRoute, private computerService: ComputerService, private router: Router, 
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.isLoading=true;
    this.marqueDispo = this.computerService.marqueDispo;
    this.typeDispo = this.computerService.typeDispo;
    this.categorieDispo = this.computerService.categorieDispo;
    this.computerService.getComputerById(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data:
      Computer) => {
      this.computer = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.computerService.editComputer(this.computer).subscribe(then => {
      this.router.navigate(['/computers']);
    });
    this.toastrService.success('Ton ordinateur a été modifié avec succès', 'Félicitations !');
  }

}
