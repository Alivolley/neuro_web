export const getDesignTokens = (mode, locale) => ({
    mode: mode,

    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#131514',
                    ...(locale === 'fa' && {
                        direction: 'rtl'
                    })
                }
            }
        }
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
        disableBgColor: '#3C3E39',
        disableTextColor: '#676A61',
        textBlue: '#587987'
    },
    palette: {
        textColor: {
            main: '#A0ACB1'
        },
        menuItemColor: {
            main: '#B0CEB8'
        },
        buttonTextColor: {
            main: '#BCCCA2'
        },
        goldColor: {
            main: '#AEB27E'
        },
        darkGold: {
            main: '#797F4A'
        },
        borderColor: {
            main: '#A4B28E'
        },
        buttonBgColor: {
            main: '#131514'
        },
        titleColor: {
            main: '#958375'
        },
        numberColor: {
            main: '#CCAA60'
        },
        disableBgColor: {
            main: '#3C3E39'
        },
        disableTextColor: {
            main: '#676A61'
        },
        textBlue: {
            main: '#587987'
        }
    }
});
