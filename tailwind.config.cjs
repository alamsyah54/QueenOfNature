/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                blob: "blob infinite 7s",
                hero: "hero infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: " translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: " translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: " translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: " translate(0px, 0px) scale(1)",
                    },
                },
                hero: {
                    "0%": {
                        transform: " translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: " translate(10px, -10px) scale(1.1)",
                    },
                    "66%": {
                        transform: " translate(-20px, 10px) scale(0.9)",
                    },
                    "100%": {
                        transform: " translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
