import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../ui/card/card.component';
import { HomeComponent } from '../home/home.component';
import { NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { product } from '../../product/product.interface';
import { BuyButtonComponent } from "../../ui/buy-button/buy-button.component";
 
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CardComponent, HomeComponent, NgIf, UpperCasePipe, BuyButtonComponent,NgOptimizedImage],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
 
export class ProductPageComponent{

  @Input() text: string = ''
  @Input() item: product = {} as product
  @Output() btnClick = new EventEmitter<product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
  // product: product | undefined;
 
  constructor(private route: ActivatedRoute) { }

  isLoading:boolean=false;
 
  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.item = await response.json();
        this.isLoading=true;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
 
}
