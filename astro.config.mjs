// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://focusrest-lp.garitto.jp',
  image: {
    service: passthroughImageService(),
  },
});
