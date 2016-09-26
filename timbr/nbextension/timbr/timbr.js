define(['base/js/namespace'], function( Jupyter ) {
  var extensionLoaded = false;

  function loadTimbr( host ) {
    if ( extensionLoaded ) { return; }
    var link = document.createElement( 'link' );
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://' + host + '/nbextension.css';
    document.getElementsByTagName( 'head' )[0].appendChild( link );
    
    var script = document.createElement( 'script' );
    script.src = 'https://' + host + '/js/nbextension.js';
    document.getElementsByTagName( 'head' )[0].appendChild( script );

    // Block until script has loaded
    function check() {
      if ( window.Twola === undefined || !window.Twola.init ) {
        window.setTimeout(check, 25);
      } else if ( !extensionLoaded ) {
        window.Twola.init();
        extensionLoaded = true;
      }
    }
    check();
        
  }

  return {

    /**
     * load_ipython_extension
     * Called when the extension is added to the notebook
     * loads the Timbr notebook js and waits untils ready
     *
     */
    load_ipython_extension() {
      $( [ Jupyter.events ] ).on( 'kernel_ready.Kernel', function() {
        Jupyter.notebook.kernel.execute( "import os\nprint os.environ['TIMBR_HOST']", {
          iopub: {
            output: function( response ) {
              var host = 'app0.timbr.io';
              if ( response.msg_type === 'stream' ) {
                host = response.content.text;
              }
              loadTimbr( host );
            }
          }
        }, { silent: false } );
      });
    } 
  };
});
