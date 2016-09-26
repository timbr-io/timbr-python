cd %RECIPE_DIR%
%PYTHON% setup.py install

set nbpath=%PREFIX%\share\jupyter\nbextensions
mkdir %nbpath%

xcopy /E .\timbr\nbextension\timbr\* %nbpath%\