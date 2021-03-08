const colors = {
    text: '#585858',
    background: '#f7f7f7',
    primary: '#3ccfff',
    primaryDark: "#58bde9",
    primaryLight: "#99dcf1",
    secondary: '#30c',
    muted: '#a9a9a9'
}

const theme = {
    fonts: {
        body: 'DINRoundPro',
        heading: 'DINRoundPro',
        monospace: 'DINRoundPro'
    },
    fontWeights: {
        body: 500,
        heading: 700,
        bold: 700
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
            fontFamily: 'body',
            fontWeight: 'body'
        }
    },
    buttons: {
        primary: {
            fontFamily: 'body',
            fontWeight: 'bold',
            borderRadius: '10px',
            textTransform: 'uppercase',

            cursor: "pointer"
        },
        plain: {
            background: "none",
            color: colors.text,
            fontFamily: 'body',
            fontWeight: 'bold',
            fontSize: 4,

            cursor: "pointer"
        },
        plainDisabled: {
            background: "none",
            color: colors.muted,
            fontFamily: 'body',
            fontWeight: 'bold',
            fontSize: 4
        },
        icon: {
            background: 'transparent',
            color: 'text',
            padding: 0,

            cursor: "pointer"
        },
        outline: {
            default: {
                fontFamily: 'body',
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
            "&:hover": {
                color: "white",
                filter: "brightness(95%)"
            },
            "&:visited": {
                color: "white"
            }
        }
    },
    sizes: {
        container: "1082px"
    },
    forms: {
        input: {
            fontFamily: 'body',

            borderRadius: "0px",
            borderTopStyle: "none",
            borderLeftStyle: "none",
            borderRightStyle: "none",

            borderBottomColor: colors.primary,
            borderBottomWidth: "2px"
        }
    }
}

export default theme