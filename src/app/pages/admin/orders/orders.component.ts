import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/static/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: any;
order_detail: any;
  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {

    this.orders = this.orderService.getOrders();
    console.log(this.orders);
    
  }


  getDetails(order: any) {
    this.order_detail = order;
  }


}
