import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { faEdit, faSpinner, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  computers: Computer[];
  faEdit = faEdit;
  faTrash = faTrash;
  faSpinner = faSpinner;
  faInfoCircle = faInfoCircle;

  constructor(private computerService: ComputerService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    
    return this.computerService.getComputers().subscribe((data: Computer[]) => {
      this.computers = data;
      this.isLoading = false;
    });
  }

  deleteComputer(computer: Computer): void {
    this.isLoading = true;
    this.computerService.removeComputer(computer).subscribe(then => {
      this.computerService.getComputers().subscribe((data: Computer[]) => {
        this.computers = data;
        this.isLoading = false;
      });
    });
    this.toastrService.success('Ton ordinateur a été supprimé avec succès', 'Félicitations !');
  }

}
