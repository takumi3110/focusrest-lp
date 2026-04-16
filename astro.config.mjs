// @ts-check
import { defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://focusrest-lp.garitto.jp',
  base: '/focusrest-lp',
  build: {
    assetsPrefix: '/focusrest-lp',
  }
});
