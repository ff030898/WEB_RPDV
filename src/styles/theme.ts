import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
     gray: {
        "50": "#ffffff",
        "100": "#f8f8f9",
        "150": "#999999",
        "200": "#EEEEEE",
        "300": "#DDDDDD",
        "600": "#66788A",
        "700": "#24465B",
        "800": "#333333"
     },
      blue: {
        "500": "#4285F4"
      }
    },
    fonts: {
     heading: 'Roboto',
     body: 'Roboto',

    },
    styles: {
        global: {
            body: {
                bg: 'gray.200',
                color: 'gray.800'
            }
        }
    }
})