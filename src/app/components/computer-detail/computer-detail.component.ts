import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {
  isLoading: boolean;
  computer: Computer;
  faSpinner = faSpinner;
  constructor(private computerService: ComputerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.getComputerById(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Computer) => {
      this.computer = data;
      this.isLoading = false;
    });
  }

}
