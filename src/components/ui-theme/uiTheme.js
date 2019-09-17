
const _hm = {
  'grey': 'grey',
  'light': '#e8e8e8',
  'sand': '#f7e8c3'
};

const uiThemeImpl = {
  toBg: (uiTheme) => ({
    backgroundColor: _hm[uiTheme]
  })
};

export default uiThemeImpl
