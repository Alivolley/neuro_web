/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                customMd: '900px'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                textColor: '#A0ACB1',
                menuItemColor: '#B0CEB8',
                buttonTextColor: '#BCCCA2',
                goldColor: '#AEB27E',
                darkGold: '#797F4A',
                borderColor: '#A4B28E',
                buttonBgColor: '#131514',
                titleColor: '#958375',
                numberColor: '#CCAA60'
            },
            fontFamily: {
                avgardn: 'avgardn',
                avgardnItalic: 'avgardnItalic',
                pubg: 'pubg',
                aubrey: 'aubrey',
                picoopicRegular: 'picoopic_Regular',
                titreZebr2: 'titre_Zebr2'
            },
            boxShadow: {
                customButtonShadow: '0px 4px 30px 0px #757A4F1A'
            }
        }
    },
    plugins: []
};
