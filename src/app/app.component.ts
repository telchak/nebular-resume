import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NbMenuItem, NbIconModule, NbSidebarComponent, NbMenuService, NbMenuBag } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private sidebarService: NbSidebarService, private menuService: NbMenuService) {
  }
  @ViewChild('leftSidebar')
  SidebarComponent!: NbSidebarComponent;


  title = 'nebular-resume';



  items: NbMenuItem[] = [
  {
    title: 'Home',
    link: '/home',
    icon: 'home-outline',
    home: true,
    pathMatch: 'full'
  },
  {
    title: 'About me',
    link: '/about-me',
    icon: 'person-outline',
    pathMatch: 'full'
  },
  {
    title: 'Resume',
    link: '/resume',
    icon: 'book-open-outline',
    pathMatch: 'full'
  },
  {
    title: 'Blog',
    url: 'https://telchak.github.io/ittricks.github.io/',
    icon: 'globe-2-outline',
  },
];


toggleCompact(): void{
if (this.SidebarComponent.state !== 'compacted'){
  this.sidebarService.compact('left-sidebar');
}
else {
  this.sidebarService.expand('left-sidebar');
}
}

// selectStyle(): any {
//   console.log('Router Url: ', this.router.url);
//   if (this.router.url === '/about-me'){
//       return 0;
//     }
//     else {
//       return 36;
//     }
// }

}
