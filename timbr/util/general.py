import ast
import types
import warnings
import re
import os
import errno
from contextlib import contextmanager
from functools import partial

# http://stackoverflow.com/questions/600268/mkdir-p-functionality-in-python
def mkdir_p(path):
    try:
        os.makedirs(path)
    except OSError as exc:
        if exc.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else: raise

# Modifed from StackOverflow:
# http://stackoverflow.com/questions/12700893/how-to-check-if-a-string-is-a-valid-python-identifier-including-keyword-check
def isidentifier(ident):
    """Determines, if string is valid Python identifier."""

    # Smoke test - if it's not string, then it's not identifier, but we
    # want to just silence exception. It's better to fail fast.
    if not isinstance(ident, types.StringTypes):
        raise TypeError('expected str, but got {!r}'.format(type(ident)))

    # Resulting AST of simple identifier is <Module [<Expr <Name "foo">>]>
    try:
        root = ast.parse(ident)
    except SyntaxError:
        return False

    if not isinstance(root, ast.Module):
        return False

    if len(root.body) != 1:
        return False

    if not isinstance(root.body[0], ast.Expr):
        return False

    if not isinstance(root.body[0].value, ast.Name):
        return False

    if root.body[0].value.id != ident:
        return False

    return True


def camelcase_to_underscored(string):
    """ camelCase to Pythonic naming """
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', string)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()
