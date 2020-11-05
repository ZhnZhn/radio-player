const fs = require('fs')

const LIB_PLACEHOLDER = '<!--script src="app/lib"></script-->'
, _crLibTag = lib => '<script src="app/'+ lib + '" defer></script>';

const postProcessing = prevHtml => {
  let nextHtml;
  try {
    const str = fs.readFileSync('./dll/stats.json')
    , stats = JSON.parse(str)
    , lib = stats.lib;    
    nextHtml = prevHtml.replace(LIB_PLACEHOLDER, _crLibTag(lib));
  } catch(err) {
    console.log(err.message)
    return prevHtml;
  }
  return nextHtml;
}

module.exports = postProcessing
