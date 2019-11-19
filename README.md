# tailwincss-builder-plugin

## Getting Started

Insert the plugin into your webpack.json.ts file :

```js
import { WebBundler } from "varie-bundler";
import TailwindCssPlugin from "varie-bundler-tailwindcss-plugin";

export default function(env) {
  return new WebBundler(env, {
    vue: {
      runtimeOnly: false
    }
  })
    .entry("app", ["app/app.ts", "resources/sass/app.scss"])
    .plugin(TailwindCssPlugin)
    .build();
}
```

Refer to the [tailwindcss docunmtation](https://tailwindcss.com/docs/installation/#2-add-tailwind-to-your-css) to setup adding tailwind to your css.
