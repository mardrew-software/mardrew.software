import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                typing: 'typing 500ms steps(100)',
            },
            keyframes: {
                typing: {
                    from: {
                        opacity: '0',
                        width: '0',
                    },
                    to: {
                        opacity: '1',
                        width: '100%',
                    },
                },
            },
        },
    },
    plugins: [],
}
export default config
