import os, sys
import urllib2
import ssl
import shlex
from urlparse import urlparse

from timbr.util.general import mkdir_p

from IPython.display import Javascript
from IPython.core.magic import (Magics, magics_class, line_cell_magic)

@magics_class
class TimbrMagics(Magics):

  def __init__(self, shell):
      super(TimbrMagics, self).__init__(shell)

  def _tokens(self, line):
      return shlex.split( line )

  @line_cell_magic
  def timbr(self, line):
      tokens = self._tokens( line )
      if len(tokens) == 1:
         tokens.append("")
      else:
         tokens = tuple([tokens[0], (" ").join(tokens[1:])])

      js = '''
        var twolaCheck = function() {
          if(window.Twola) {
      '''

      timbr_host = os.environ.get('TIMBR_HOST')
      if timbr_host is not None:
          js += 'window.Twola.host = "{0}";'.format( timbr_host )

      js += '''
            if(IPython.notebook.kernel.is_connected() == true) {
                clearInterval(poller);
                window.Twola.%s(element, "%s");
            }
        }
      }
      var poller = setInterval(twolaCheck, 100);
      ''' % tuple(tokens)
      return Javascript(js)


def download( url, file_name=None, size=None, variable='data' ):

    if file_name is None:
        os.path.basename( urlparse( url ) )

    path = os.environ.get("TIMBR_DATA", os.path.expanduser("~/.timbr/data"))
    mkdir_p(path)

    file_path = "{}/{}.h5".format( path, file_name )
    exists    = os.path.isfile( file_path )

    if not exists:
        report_progress( url, file_path, file_name )

    elif size is not None and exists:
        remote_size = size
        local_size = os.path.getsize( file_path )
        if remote_size != local_size:
            report_progress( url, file_path, file_name )

    return file_path;


def report_progress( url, path, name):
    for progress in fetch_download( url, path ):
        print '\r', "{0} {1:3.0f}%".format(name, progress)
        sys.stdout.flush()


def fetch_download(url, path):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode    = ssl.CERT_NONE

    response     = urllib2.urlopen(url, context=ctx)
    meta         = response.info()
    file_size    = int( meta.getheaders("Content-Length")[0] )
    file_size_dl = 0
    block_size   = 8192

    with open(path, 'wb') as newfile:
      pct = 0.0
      while file_size_dl < file_size:
        buf = response.read(block_size)
        file_size_dl += len(buf)
        newfile.write(buf)
        new_pct = file_size_dl * 100.0 / file_size
        if new_pct - pct > 0.5:
          yield new_pct
          pct = new_pct


def load_ipython_extension(ip):
    """Load the extension in IPython.
       TODO print some usage help here """
    ip.register_magics(TimbrMagics)
