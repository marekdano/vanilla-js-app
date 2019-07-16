import time from './time.js'

const element = document.querySelector('#more')
element.innerHTML = `
<h2>
  String Literals
</h2>
<p>
Template literals are string literals 
allowing embedded expressions. 
You can use multi-line strings and 
string interpolation features with them. 
They were called "template strings" in 
prior editions of the ES2015 specification.
</p>
<p>
  <i>
  You've read this post at ${time()}. Thank you!
  </i>
</p>
`
