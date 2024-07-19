import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit{


  ngOnInit(){
    lottie.loadAnimation({
      container: document.getElementById("animation-timer"),
      path: "assets/Animations/Time.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "stepway-animations",
    });
  }
}
