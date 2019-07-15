import time from './time.js'

const element = document.querySelector('#more')
element.innerHTML = `
<h2>
  Dynamic module import
</h2>
<p>
  Dynamic import() introduces a new function-like form of import
  that caters to those use cases. import(moduleSpecifier) returns
  a promise for the module namespace object of the requested module,
  which is created after fetching, instantiating, and evaluating all
  of the module’s dependencies, as well as the module itself.
</p>
<p>
  <i>
  You've read this post at ${time()}. Thank you!
  </i>
</p>
`
