const colors = {
    text: '#585858',
    background: '#f7f7f7',
    primary: '#3ccfff',
    primaryDark: "#58bde9",
    primaryLight: "#99dcf1",
    muted: '#a9a9a9',
    danger: '#FF3C38'
}

const theme = {
    fonts: {
        regular: 'DINRoundPro',
        medium: 'DINRoundPro-Medi'
    },
    fontWeights: {
        light: 300,
        regular: 500,
        bold: 700,
        black: 900
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    breakpoints: [
        '40em', '56em',
    ],
    colors,
    styles: {
        root: {
            fontFamily: 'regular',
            fontWeight: 'regular'
        }
    },
    buttons: {
        primary: {
            fontFamily: 'regular',
            fontWeight: 'bold',

            borderRadius: '10px',
            textTransform: 'uppercase',

            cursor: "pointer",

            transition: "0.1s",
            "&:hover": {
                background: colors.primaryDark,

                transition: "0.1s"
            }
        },
        navbar: {
            fontFamily: 'regular',
            fontWeight: 'bold',

            textTransform: 'uppercase',

            cursor: "pointer"
        },
        icon: {
            background: 'transparent',
            color: 'text',

            padding: 0,

            cursor: "pointer"
        },
        outline: {
            default: {
                fontFamily: 'regular',
                fontWeight: 'bold',

                background: 'transparent',
                color: colors.primary,

                borderWidth: '2px',
                borderColor: colors.primaryLight,
                borderStyle: 'solid',
                borderRadius: '12px',

                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "24px",
                paddingRight: "24px",

                cursor: "pointer",

                transition: "0.1s",
                "&:hover": {
                    color: colors.primaryDark,
                    borderColor: colors.primaryDark,

                    transition: "0.1s"
                }
            },
            success: {
                background: 'green'
            },
            error: {

            }
        }
    },
    links: {
        nav: {
            color: "white",
            fontWeight: "bold",

            "&:hover": {
                color: "white"
            }
        }
    },
    sizes: {
        container: "1082px"
    },
    forms: {
        input: {
            fontFamily: 'regular',

            borderRadius: "0px",
            borderTopStyle: "none",
            borderLeftStyle: "none",
            borderRightStyle: "none",

            borderBottomColor: colors.primary,
            borderBottomWidth: "2px",

            "&:focus": {
                outline: "none"
            }
        },
        plain: {
            border: "none",

            "&:focus": {
                outline: "none"
            }
        }
    }
}

export default theme