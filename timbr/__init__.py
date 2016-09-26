from timbr.datastore.snapshot import Snapshot

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'timbr_machine',
        'require': 'timbr_machine/machine'
    }]
