import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild(IonTitle, { read: ElementRef })
  ionTileHeader!: ElementRef<HTMLIonTitleElement>;

  constructor(private animationController: AnimationController) {}

  ngAfterViewInit(): void {
    this.headerAnimation();
  }

  headerAnimation() {
    this.animationController
      .create()
      .addElement(this.ionTileHeader.nativeElement)
      .duration(3000)
      .iterations(2)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0')
      .play();
  }
}
