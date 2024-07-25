import { Component, Input } from '@angular/core';
import { CardDetailsComponent } from "../card-details/card-details.component";
import { CommonModule } from '@angular/common';
import { product } from '../../product/product.interface';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardDetailsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() 
    myItem!: product;
  }
