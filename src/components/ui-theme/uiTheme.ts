import type { 
  UiThemeType, 
  UiThemeHmType 
} from "./types";

const _hm: UiThemeHmType = {
  grey: "grey",
  //'light': '#e8e8e8',
  //'light': '#f9f9f9',
  light: "#e1e1e1",
  //'sand': '#f7e8c3'
  //sand: '#fdf1d5',  
  sand: "#e8e0cb"
};

const uiThemeImpl = {
  toBg: (uiTheme: UiThemeType) => ({
    backgroundColor: _hm[uiTheme]
  })
};

export default uiThemeImpl
