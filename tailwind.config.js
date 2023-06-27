const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'brown' : {
                    100: '#D77634',
                    200: '#D77634',
                    300: '#D77634',
                    400: '#D77634',
                    500: '#D77634',
                    600: '#D77634',
                    700: '#D77634',
                    800: '#D77634',
                    900: '#D77634',
                    950: '#D77634',
                    50: '#D77634',
                },
                'purple' : {
                    50: '#ffdfee',
                    100: '#ffcde6',
                    200: '#f8b7d9',
                    300: '#dc83b8',
                    400: '#b46695',
                    500: '#b08ea3',
                    600: '#937687',
                    700: '#79626F',
                    800: '#573a48',
                    900: '#412a36',
                    950: '#34222d',
                },
                'teal' : {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#042f2e',
                }
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
