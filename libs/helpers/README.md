# @digital-plant/zyfra-helpers
This project add base helpers for work. 

Main docs: read comments in codes and readMe files

#### Сервисы
- **ZuiDestroyService** - Абстракция над ngOnDestroy для использования с takeUntil, дока с примером в readMe файле сервиса

#### Директивы
- **ZuiLetModule** - Модуль с директивой позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне, чтобы избежать пересчета геттеров или множества асинхронных каналов. Пример в коде.

#### Пайпы
- **CallFuncPipeModule** - Модуль с пайпом позволяет снизить кол-во вызовов функций которые вызываются из шаблона, когда входящие аргументы не меняются. Пример в коде.
- **ToTypePipeModule** - Модуль с пайпом позволяет Этот пайп можно использовать для приведения типов переменных контекста ng-template, чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок. Пример в коде.

### Build

nx affected:build --files=libs/helpers/src/index.ts