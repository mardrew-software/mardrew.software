import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
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
