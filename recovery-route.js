/* Route recovery callbacks before the directory auth client consumes them. */
if(new URLSearchParams(location.hash.slice(1)).get('type')==='recovery'){location.replace('/account-recovery'+location.search+location.hash);}
