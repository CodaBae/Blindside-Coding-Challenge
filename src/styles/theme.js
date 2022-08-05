import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        primary : '#6644B8',
        btn: '#061133',
        white: '#fff',
        black: '#000',
        mobile_bg: '#221039',
        menu: '#BB15BD',
        red: '#D22F26'
    }
}

const fonts = {
    body: 'Manrope'
}

const global = {
    html: {
      fontSize: "62.5%",
    },
    body: {
      fontSize: "1.4rem",
    },
  };
  
  const theme = extendTheme({
    styles: { global },
    colors,
    fonts,
  });
  
  export { theme };
  