import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { EnvironmentInjector } from '@angular/core';
import { MfeHello } from './app/mfe-hello';

(async () => {
  const app = await createApplication({ providers: [] });
  const injector = app.injector.get(EnvironmentInjector);

  const el = createCustomElement(MfeHello, { injector });

  customElements.define('mfe-hello', el);

  window.dispatchEvent(new CustomEvent('mfe:ready', { detail: { id: 'hello', version: '0.0.1' } }));
})();
