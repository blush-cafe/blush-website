/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'ice-cream-bg': '#f8c4af',
                'blush-red': '#c10830',
            },
            /* Register custom font family */
            fontFamily: {
                karla: ['Karla', 'sans-serif'],
            },
            keyframes: {
                'blur-fade-in': {
                    '0%': { opacity: '0', filter: 'blur(35px)' },
                    '100%': { opacity: '1', filter: 'blur(0)' },
                }
            },
            animation: {
                'fade-blur': 'blur-fade-in 2.5s ease-out forwards',
            }
        },
    },
    plugins: [],
}