import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit{


  ngOnInit(){
    lottie.loadAnimation({
      container: document.getElementById("animation-container"),
      path: "assets/Animations/Working Mother.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "adjingo-animation",
    });
  }
}
