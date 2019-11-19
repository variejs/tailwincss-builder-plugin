import TailwindCss from "tailwindcss";
import Plugin from "varie-bundler/lib/plugins/Plugin";

export default class TailwindCssPlugin extends Plugin<undefined> {
  public register() {
    this.bundler.webpackChain.module
      .rule("sass")
      .oneOf("normal")
      .use("postcss-loader")
      .tap((options) => {
        options.plugins.unshift(TailwindCss);
        return options;
      });

    this.bundler.webpackChain.module
      .rule("sass")
      .oneOf("vue")
      .use("postcss-loader")
      .tap((options) => {
        options.plugins.unshift(TailwindCss);
        return options;
      });
  }
}
