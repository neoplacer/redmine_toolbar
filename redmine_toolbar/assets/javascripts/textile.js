// Add SQL toolbar button after page loads.

//Event.observe(window, 'load',
//  function() {
$(document).ready(function(){ 
    if(typeof(jsToolBar) != "undefined") {

      // SQL toolbar
      jsToolBar.prototype.elements.sql = {
        type: 'button',
        title: 'SQL',
        fn: {
          wiki: function() { this.encloseLineSelection('<pre><code class="sql">\n', '\n</code></pre>') }
        }
      }

      // CPP toolbar
      jsToolBar.prototype.elements.cpp = {
        type: 'button',
        title: 'CPP',
        fn: {
          wiki: function() { this.encloseLineSelection('<pre><code class="cpp">\n', '\n</code></pre>') }
        }
      }

      // IMG  toolbar
      jsToolBar.prototype.elements.imr = {
        type: 'button',
        title: 'IMGREZ',
        fn: {
          wiki: function() { this.encloseLineSelection('!{width: 50%}', '!') }
        }
      }


      // redraw toolbar to get the new button to show
      wikiToolbar.draw();
    }
  }
);
