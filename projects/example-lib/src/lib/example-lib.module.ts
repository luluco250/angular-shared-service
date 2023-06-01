import { ModuleWithProviders, NgModule } from '@angular/core';
import { PropertyBagService } from './property-bag.service';

@NgModule({
  providers: [
    // Can also be done here so it is always provided without the option to only
    // provide through the client application or some other way.
    // PropertyBagService,
  ],
})
export class ExampleLibModule {
  public static forRoot(): ModuleWithProviders<ExampleLibModule> {
    return {
      ngModule: ExampleLibModule,
      providers: [
        PropertyBagService,
      ],
    };
  }

  public constructor(propertyBagService: PropertyBagService) {
    propertyBagService.set("Hello", "World");
  }
}
