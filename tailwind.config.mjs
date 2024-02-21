/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/styles/*',
  ],
  plugins: [],
  future: { hoverOnlyWhenSupported: true },
}

export default tailwindConfig
