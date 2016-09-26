cd %RECIPE_DIR%
%PYTHON% setup.py install

set nbpath=%PREFIX%\share\jupyter\nbextensions
mkdir %nbpath%\timbr
mkdir %nbpath%\timbr_machine

xcopy /E .\timbr\nbextension\timbr\* %nbpath%\timbr\
xcopy /E .\timbr\static\* %nbpath%\timbr_machine\

