/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/CalculatorButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/ThemeText`; params?: Router.UnknownInputParams; } | { pathname: `/constants/theme`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/useCalculator`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CalculatorButton`; params?: Router.UnknownOutputParams; } | { pathname: `/components/ThemeText`; params?: Router.UnknownOutputParams; } | { pathname: `/constants/theme`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/useCalculator`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/CalculatorButton${`?${string}` | `#${string}` | ''}` | `/components/ThemeText${`?${string}` | `#${string}` | ''}` | `/constants/theme${`?${string}` | `#${string}` | ''}` | `/hooks/useCalculator${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/CalculatorButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/ThemeText`; params?: Router.UnknownInputParams; } | { pathname: `/constants/theme`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/useCalculator`; params?: Router.UnknownInputParams; };
    }
  }
}
