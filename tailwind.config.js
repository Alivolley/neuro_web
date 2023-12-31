/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         screens: {
            customSm: '600px',
            customMd: '900px',
            customLg: '1200px',
            customXl: '1400px',
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            localeGradient: 'linear-gradient(90deg, rgba(63,68,54,1) 32%, rgba(176,206,184,1) 100%)',
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
            numberColor: '#CCAA60',
            textBlue: '#587987',
         },
         fontFamily: {
            avgardn: 'avgardn',
            avgardnItalic: 'avgardnItalic',
            pubg: 'pubg',
            aubrey: 'aubrey',
            picoopicRegular: 'picoopic_Regular',
            titreZebr2: 'titre_Zebr2',
         },
         boxShadow: {
            customShadow: '0px 4px 43px 0px #C6E8EA',
         },
      },
   },
   plugins: [],
};
