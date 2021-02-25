import { extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    global: {
      "html, body": {
        bg: "green.100",
      },
    },
  },
  fonts: {
    heading: "Indie Flower",
    body: "Roboto",
  },
};

const theme = extendTheme(config);

export default theme;
