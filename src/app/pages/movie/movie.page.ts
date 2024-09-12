import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  name: string = '';
  lastName: string = '';
  age?: number = undefined;
  ticketType: string = '';

  constructor(
    private alertController: AlertController,
    private movieService: MovieService
  ) {}

  async comprarEntrada() {
    console.log(this.name);
    if (!this.name || !this.lastName || !this.age || !this.ticketType) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellene todos los campos',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const result = this.movieService.getPrice(this.age, this.ticketType)

    const message = `Nombre: ${this.name},
    Apellido: ${this.lastName},
    Edad: ${this.age},
    Tipo de entrada: ${this.ticketType},
    Precio: ${result.price},
    Descuento: ${result.discount},
    Precio Final: ${result.finalPrice}`;

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}
}
