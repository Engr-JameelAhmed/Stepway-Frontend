import { AfterViewInit, Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements AfterViewInit{

   yt: string = "https://www.youtube.com/@STEPWAYBIF";

  animations = [
    { containerId: "fb-site", path: "assets/Animations/FB.json" },
    { containerId: "yt-site", path: "assets/Animations/you.json" },
    { containerId: "link-site", path: "assets/Animations/Link.json" },
  ];

  ngAfterViewInit() {
    this.animations.forEach(animation => {
      lottie.loadAnimation({
        container: document.getElementById(animation.containerId),
        path: animation.path,
        renderer: 'svg',
        loop: true,
        autoplay: true
      });
    });
  }

  openYt(): void{
    window.open('https://www.youtube.com/@STEPWAYBIF', '_blank');
  }
}
