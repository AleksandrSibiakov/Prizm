import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-only-icon-example',
  templateUrl: './switcher-only-icon-example.component.html',
  styleUrls: ['./switcher-only-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOnlyIconExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      icon: 'table',
      hint: {
        value: 'Таблицы',
        options: {
          theme: 'light',
          direction: 'l',
        },
      },
    },
    {
      icon: 'network-v2',
      hint: {
        value: 'Мнемосхемы',
        options: {
          theme: 'light',
          showDelay: 100,
          hideDelay: 500,
          autoReposition: false,
          direction: 'br',
        },
      },
    },
    {
      icon: 'dashboard-fill',
      hint: {
        value: 'Дашборды',
      },
    },
  ];
}
