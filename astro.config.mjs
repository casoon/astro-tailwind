import { defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
//import compress from 'astro-compress';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig(
    {
        server: { port: 8080 },
        site: 'https://www.changethis.com',
        integrations: [
            tailwind(),
            sitemap({
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: new Date('2022-12-21')}),
            /*compress({
                css: false,
                html: true,
                img: false,
                js: false,
                svg: false,
                logger: 0,
            }),*/
            alpine(),
            partytown()
        ]
    },

);
