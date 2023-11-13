import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            animation: {
                typing: 'typing 2s steps(200)'
            },
            keyframes: {
                typing: {
                    from: {
                        width: '0'
                    },
                    to: {
                        width: '100%'
                    }
                }
            }
        }
    },
    plugins: []
};
export default config;
