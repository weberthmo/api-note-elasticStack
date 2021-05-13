#!/bin/bash

set -euo pipefail

beat=$1

until curl -s http://kibana:5601 > /dev/null; do
    sleep 2
done
sleep 5


${beat} setup -E setup.kibana.host=kibana