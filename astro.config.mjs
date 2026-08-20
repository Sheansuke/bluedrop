// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.bluedroprd.com', // Actualiza con tu dominio real
    experimental: {
        csp: true,
    },

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            serialize(item) {
                const url = item.url.replace(/\/$/, '')

                if (url.endsWith('/tratamiento-de-agua')) {
                    item.priority = 1.0
                } else if (
                    url.endsWith('/tratamiento-de-agua-santo-domingo') ||
                    url.endsWith('/tratamiento-de-agua-residencial-industrial')
                ) {
                    item.priority = 0.8
                } else if (url === 'https://www.bluedroprd.com') {
                    item.priority = 0.9
                }

                return item
            },
        }),
    ],
});
