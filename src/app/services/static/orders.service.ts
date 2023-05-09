import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
orders: any;
  constructor() { }

  getOrders() {
    const o = localStorage.getItem('orders');
    if (o) {
      return JSON.parse(o);
    } 
    return [];
  }

  setOrders(order: any) {
    let orders = this.getOrders();
    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    
  }
  
}
