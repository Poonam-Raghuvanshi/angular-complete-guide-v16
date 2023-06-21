import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test!',
      procurement: 2015,
      isactive: 'yes',
    },
  ];

  //ActivatedRoute knows the current path of component while router.navigate doesn't
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      procurement: 2015,
      isactive: 'yes',
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      procurement: 2015,
      isactive: 'yes',
    });
  }

  navigateToAddCustomer() {
    this.router.navigate(['/customers/add'], {
      relativeTo: this.activatedRoute, queryParamsHandling:'preserve'
    });
    // queryParamsHandling:'merge' will add the new one
    //this.activatedRoute.snapshot.params['id']
    //this.activatedRoute.snapshot.queryParams
    //this.activatedRoute.snapshot.fragment
    // //this.activatedRoute.params.subscribe()  angular will clean up this subscription
  }

  navigateToAddProduct() {
    this.router.navigate(['/products/add'], {
      relativeTo: this.activatedRoute,
    });
  }
}
