import sys
import os.path
import simplejson as json
import csv
import types

import argh

from timbr import Snapshot
from timbr.serializer import custom_encode


def convert(path, name="raw"):
    """
    Convert a snapshot to json (raw data) and csv files (tables)
    """

    def save_json(out_path, data):
        ids, rows = zip( *data )
        fname = os.path.join(out_path, name+'.ndjson')
        with open( fname, 'w') as output_file:
            for row in rows:
                row = {k.encode('utf-8'): custom_encode(v) for k, v in row.iteritems()}
                output_file.write( json.dumps(row) + '\n' )
            print "Created JSON file: %s" % (fname,)

    def encode_value(v):
        if isinstance(v, types.StringTypes):
            return v.encode('utf-8')
        else:
            return str(v)

    def save_csv( out_path, data ):
        for tbl in data.tables:
            table = data.tbl[tbl]
            tname = os.path.join(out_path, tbl + '.csv')
            with open(tname, 'wb') as output_file:
                # TODO: Potentially remap column names based on table specification
                keys = table[0].keys()
                writer = csv.DictWriter(output_file, [k.encode('utf-8') for k in keys])
                writer.writeheader()
                for row in table:
                    writer.writerow({k.encode('utf-8'): encode_value(v) for k, v in row.iteritems()})

                print "Created CSV file: %s" % (tname,)

    if os.path.exists( path ):
        base = os.path.dirname( path )
        data = Snapshot( path )
        save_json( base, data )
        if len(data.tables) > 0:
            save_csv( base, data )
    else:
        print "Couldn't find snapshot %s" % (path,)


def main():
    parser = argh.ArghParser()
    parser.add_commands([convert])
    parser.dispatch()

if __name__ == "__main__":
    main()
