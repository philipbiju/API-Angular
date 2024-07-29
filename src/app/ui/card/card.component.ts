import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../product/product.interface';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
 
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 
  @Input() item:product = {} as product;
 
  @Output() btnClick = new EventEmitter<product>();
 
  constructor(private router: Router){}
  goNextPage() {
    this.router.navigate([`/product-page/${this.item.id}`]);
  }

}