import { Provider, Type } from '@nestjs/common';

export function proxy(useCase: Type, injectClasses: Type<any>[]): Provider {
  return {
    provide: useCase,
    inject: injectClasses,
    useFactory: (inject: unknown[]) => new useCase(inject),
  };
}
