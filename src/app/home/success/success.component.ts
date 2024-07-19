import { AfterViewInit, Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements AfterViewInit {

  animations = [
    { containerId: "fb-container", path: "assets/Animations/FB.json" },
    { containerId: "insta-container", path: "assets/Animations/insta.json" },
    { containerId: "yt-container", path: "assets/Animations/you.json" },
    { containerId: "link-container", path: "assets/Animations/Link.json" },
    { containerId: "x-container", path: "assets/Animations/x.json" }
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
}
