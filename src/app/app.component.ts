import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./ui/card/card.component";
import { product } from './product/product.interface'
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, LoginComponent, AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(public api:HeroService) {}

}
