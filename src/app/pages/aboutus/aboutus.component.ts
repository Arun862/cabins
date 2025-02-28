import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutusComponent {
  slidesPerView:Number = 2;
  screenWidth!: number;

  @HostListener('window:resize')
  getscreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 480){
      this.slidesPerView = 1;
    }
    else if(this.screenWidth >= 480 && this.screenWidth <= 992){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
      this.slidesPerView = 2;
    }
  }
}
