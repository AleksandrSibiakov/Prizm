import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { INavigationTree } from '@prizm-ui/components';
import { NAVIGATION_EXAMPLE } from './navigation-example.const';

@Component({
  selector: 'prizm-navigation-example',
  templateUrl: './navigation-example.component.html',
  styleUrls: ['./navigation-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class NavigationExampleComponent {
  public readonly exampleNavigationBasic: TuiDocExample = {
    TypeScript: import('./examples/navigation-basic-example/navigation-basic-example.component?raw'),
    Module: import('./examples/navigation-basic-example/navigation-basic-example.module?raw'),
    HTML: import('./examples/navigation-basic-example/navigation-basic-example.component.html?raw'),
    LESS: import('./examples/navigation-basic-example/navigation-basic-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public navigationTree: INavigationTree[] = NAVIGATION_EXAMPLE;
  activeElement = NAVIGATION_EXAMPLE[1];
}
