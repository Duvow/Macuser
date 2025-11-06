import { Component, OnInit } from '@angular/core';
import { MachineryServices } from '../../services/machinery-services';
import { Machinery } from '../../model/machinery';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-machinery',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './machinery.html',
  styleUrl: './machinery.scss',
})
export class MachineryPage implements OnInit {

  machineries: Machinery[] = [];
  page = 1;
  perPage = 6;

  constructor(private machineryService: MachineryServices) {
    console.log("aqui")
   }

  ngOnInit(): void {
    this.machineryService.getMachinery(this.page, this.perPage).subscribe({
      next: (response) => {
        this.machineries = response.data;
        console.log('Maquinaria cargada', this.machineries);
        console.log('Total de páginas', response.total_pages);
      },
      error: (err) => {
        console.error('Error al cargar los usuarios', err);
      }
    });

  }
}
