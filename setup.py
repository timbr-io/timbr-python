from setuptools import setup
from setuptools.command.develop import develop as _develop
from setuptools.command.install import install as _install
import os

try: 
    from notebook.nbextensions import install_nbextension
    from notebook.services.config import ConfigManager
except ImportError:
    install_nbextension = None
    ConfigManager = None

extension_dir = os.path.join(os.path.dirname(__file__), "timbr", "static")
client_extension_dir = os.path.join(os.path.dirname(__file__), "timbr", "nbextension", "timbr")

class develop(_develop):
    try:
        def run(self):
            _develop.run(self)
            if install_nbextension is not None and ConfigManager is not None:
                install_nbextension(extension_dir, symlink=True,
                                overwrite=True, user=True, destination="timbr_machine")
                install_nbextension(client_extension_dir, symlink=True,
                                overwrite=True, user=True, destination="timbr")
                cm = ConfigManager()
                cm.update('notebook', {"load_extensions": {"timbr_machine/machine": True } })
    except:
        pass

class install(_install):
    try:
        def run(self):
            _install.run(self)
            if install_nbextension is not None and ConfigManager is not None:
                cm = ConfigManager()
                cm.update('notebook', {"load_extensions": {"timbr_machine/machine": True } })
    except:
        pass

setup(name='timbr',
      cmdclass={'develop': develop, 'install': install},
      version='0.0.1',
      description='Dask-based data collection and processing machines, snapshot datastores, and a jupyter notebook extension',
      url='https://github.com/timbr-io/timbr-python',
      author='Pramukta Kumar',
      author_email='pramukta.kumar@timbr.io',
      license='MIT',
      packages=['timbr', 'timbr.machine', 'timbr.datastore', 'timbr.util', 'timbr.notebook', 'timbr.legacy'],
      zip_safe=False,
      entry_points = {
        'console_scripts': [
          "timbr = timbr.util.cli:main"
        ]
      },
      data_files=[
        ('share/jupyter/nbextensions/timbr_machine', [ 'timbr/static/machine.js']),
        ('share/jupyter/nbextensions/timbr', [ 'timbr/nbextension/timbr/timbr.js']),
      ],
      install_requires=[
          "pymongo>=2.8",
          "dask",
          "ipython",
          "numpy",
          "observed",
          "jupyter_react",
          "simplejson>=3.6.5",
          "tables>=3.2.1",
          "msgpack-python>=0.4.6",
          "argh>=0.26.1",
          "jsonpath-rw>=1.4.0",
          "decorator>=4.0.6"
        ],
      tests_require=[
          "nose",
          "mock",
        ]
      )
