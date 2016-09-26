import msgpack
import numpy as np

def custom_encode(obj):
    if isinstance(obj, long):
        return {"__type__": "long", "__data__": str(obj)}
    else:
        return obj

def custom_decode(obj):
    try:
        if "__type__" in obj:
            if obj["__type__"] == "long":
                obj = long(obj["__data__"])
    except:
        # Fallback to raw structure
        pass
    finally:
        return obj

def dumps(obj):
    return msgpack.dumps(obj, default=custom_encode)


def loads(msg):
    try:
        return msgpack.loads(msg, encoding="utf-8", object_hook=custom_decode)
    except msgpack.ExtraData, ed:
        return [ed.unpacked, msgpack.loads(ed.extra, encoding="utf-8", object_hook=custom_decode)]

