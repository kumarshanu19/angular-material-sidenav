import { ChangeDetectorRef, Component } from '@angular/core';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';
import { SidebarSwipeService } from './sidebar-swipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [SetGetWidthSidebarPipe]
})
export class AppComponent {
  title = 'estatehub-angular-material';
  width: number;

  navList = [
    {name: "About Us"},
    {name: "Mission & Vission"},
    {name: "Services Offered"},
    {name: "Research Report"},
    {name: "Business Center"},
    {name: "Clients"},
    {name: "Career"},
    {name: "Contact Us"},
    {name: "Terms & Condition"},
    {name: "Privacy Policy"},
  ];

  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(){
  }

  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }
}
