// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    content: {
        filesystem: ['./src/**/*.{html,js,astro}'],
    },
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetTypography(),
        presetWebFonts({
            provider: 'google', // default provider
            fonts: {
                sans: 'Roboto',
                mono: ['Fira Code', 'Fira Mono:400,700'],
                // custom ones
                lobster: 'Lobster',
            },
        })
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    safelist: 'prose m-auto text-left'.split(' '),
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent'
        },
    }


})
