import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getPrice(age: number, ticketType: string) {
    const price2d = 4600;
    const price3d = 5300;
    const price4dx = 6200;

    const childDiscount = 500;
    const olderDiscount = 800;

    let discount = 0;

    if (age <= 12) {
      discount = childDiscount;
    } else if (age >= 65) {
      discount = olderDiscount;
    }

    let price = 0;
    switch (ticketType) {
      case '2D':
        price = price2d;
        break;
      case '3D':
        price = price3d;
        break;
      case '4DX':
        price = price4dx;
        break;
    }

    const finalPrice = price - discount;
    return {
      price: price,
      discount: discount,
      finalPrice: finalPrice,
    }
  }
}
