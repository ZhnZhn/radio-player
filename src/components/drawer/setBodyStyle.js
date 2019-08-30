const BG = {
  '1': 'grey',
  '2': '#e1e1e1',
  '3': '#e8e0cb'
};

const setBodyStyle = (value) => {
  const _color = BG[''+value];
  if (_color) {
    document.body.style.backgroundColor = _color
  }
}

export default setBodyStyle
