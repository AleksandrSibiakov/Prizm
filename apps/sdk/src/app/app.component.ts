import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Language, TranslateService } from '@digital-plant/zyfra-translate';

const DefaultLang = Language.ruRU;

@Component({
  selector: 'zyfra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title = 'sdk';

  public lang: Language = DefaultLang;

  constructor(private readonly translateService: TranslateService) {
    translateService.addChunk({
      defaultLang: DefaultLang,
      id: 'sdk',
      supportedLangs: [Language.enUS, Language.ruRU],
    });

    translateService.use(DefaultLang);
  }

  ngOnInit(): void {
    this.translateService.onLang.subscribe(lang => console.log(lang))
  }

  /**
   * Change locale
   */
  public toggleTranslate(): void {
    const lang = this.translateService.lang == Language.enUS ? Language.ruRU : Language.enUS;

    this.translateService.use(lang);
  }
}
