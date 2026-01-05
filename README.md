# Template Custom Elements MFE Angular

## Visão Geral

Micro Frontend Angular empacotado como **Custom Element**, com **Shadow DOM**, **Tailwind** e **ZardUI**.

## Tecnologias

- Angular
- Custom Elements
- Shadow DOM
- Tailwind CSS
- ZardUI

## Padrões

- Estilos isolados via Shadow DOM
- Tokens CSS aplicados em `:host`
- Tema controlado via atributo `theme`

## Estrutura

- `styles.css`: fonte original do ZardUI
- `styles.shadow.css`: versão adaptada para Shadow DOM
- `mfe-shadow.css`: CSS final injetado no Shadow DOM

## Comunicação

O Shell injeta o contexto via:

```ts
element.context = ShellContext;
```

## Build

```bash
npm run build:mfe
npm run serve:dist
```
