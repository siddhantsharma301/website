export const darkTheme = {
    body: {
        background: 'rgb(29, 29, 33)',
        'font-family': `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
    },
    '@media (prefers-color-scheme: dark)': {
        html: {
            'color-scheme': 'dark',
        },
        body: {
            color: 'white',
            background: 'rgb(29, 29, 33)'
        },
        '.card': {
            'border-color': 'rgb(34, 34, 34)',
        },
        '.footer': {
            'border-color': 'rgb(34, 34, 34)',
        },
        '.code': {
            background: 'rgb(17, 17, 17)'
        },
        '.logo img': {
            filter: 'invert(1)'
        }
    },
    'dark-mode': {
        '--bg-color': 'rgb(29, 29, 33) !important'
    }
}

export const lightTheme = {
    body: {
        background: 'rgb(255, 255, 240)',
        'font-family': `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
    },
    '@media (prefers-color-scheme: light)': {
        html: {
            'color-scheme': 'light',
        },
        body: {
            color: 'black',
            background: 'rgb(255,255,240)'
        },
        '.card': {
            'border-color': 'rgb(221, 221, 221)',
        },
        '.footer': {
            'border-color': 'rgb(221, 221, 221)',
        },
        '.code': {
            background: 'rgb(204, 204, 204)'
        },
        '.logo img': {
            filter: 'invert(1)'
        }
    }
}