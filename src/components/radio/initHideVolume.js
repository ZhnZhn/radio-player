/*
let _recentPosition = 0
let _diffY = 0
let _isHidden = false
let _ticking = false;


const _isNeedTask = () => (_diffY<0 && _isHidden)
  || (_diffY>0 && _recentPosition > 20 && !_isHidden)


function doTask(){
  console.log('doTask')
  if (_diffY>0 && _recentPosition > 20 && !_isHidden) {
    const _node = document.getElementById('volume')
    _node.style.overflow = 'hidden'
    _node.style.height = '0'
    _isHidden = true
    console.log('doTask: Hidden')
  } else if (_diffY<0 && _isHidden) {
    const _node = document.getElementById('volume')
    _node.style.overflow = ''
    _node.style.height = '35px'
    _isHidden = false
    console.log('doTask: Show')
  }
}

window.addEventListener('scroll', function(event){
   _diffY = window.scrollY - _recentPosition
   _recentPosition = window.scrollY
   //const _is = _isNeedTask()
   //console.log(_is)
   if (!_ticking) {
     window.requestAnimationFrame(function(){
       doTask()
       _ticking = false
     })
   }
   _ticking = true
})
*/
