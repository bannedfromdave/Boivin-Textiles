function increase(el, cnt) {
  const inp = el.parentNode.children[0];
  
  if ( typeof inp.value == 'string' && inp.value == '' ) {
      inp.value = 0;
  }
  
  inp.value = parseInt(inp.value) + parseInt(cnt);

  if ( parseInt(inp.value) > 0 ) {
      const button1 = el.parentNode.children[2];
      button1.disabled = false;
  }
}


function decrease(el, cnt) {
  const inp = el.parentNode.children[0];
  
  if ( typeof inp.value == 'string' && inp.value == '' ) {
      inp.value = 0;
  }
  
  inp.value = parseInt(inp.value) - parseInt(cnt);

  if ( parseInt(inp.value) < 0 ) {
      inp.value = 0;
      el.disabled = true;
  }
}