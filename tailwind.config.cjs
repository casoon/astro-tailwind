/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable dark mode using the 'class' strategy
    content: [
        './src/**/*.{astro,js,jsx,ts,tsx,html,vue}', // Paths to your template files
    ],
    theme: {
        extend: {
            colors: {
                // Custom color palette
                primary: '#1E40AF', // Custom primary color
                secondary: '#1F2937', // Custom secondary color
                accent: '#F59E0B', // Custom accent color
                neutral: '#3D4451', // Custom neutral color
                base: '#FFFFFF', // Custom base color
                ...require('tailwindcss/colors'), // Include all Tailwind CSS colors
            },
            fontFamily: {
                // Custom fonts
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['Fira Code', 'monospace'],
            },
            fontSize: {
                // Custom font sizes
                'xs': '.75rem',
                'sm': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
            screens: {
                // Custom screen breakpoints
                'xs': '480px',  // Extra small devices (portrait phones)
                'sm': '640px',  // Small devices (landscape phones)
                'md': '768px',  // Medium devices (tablets)
                'lg': '1024px', // Large devices (desktops)
                'xl': '1280px', // Extra large devices (large desktops)
                '2xl': '1536px',// 2XL devices (larger desktops)
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // Typography plugin
        require('@tailwindcss/forms'), // Forms plugin
        require('tailwind-scrollbar-hide'), // Hide scrollbar plugin
    ],
}
