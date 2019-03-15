
 # v-bind

si puo scrivere anche `:` per esempio v-bind:class="" >> :class=""

con il comando `v-bind` riesco a creare un collegamento fra un attibuto del mio elemento html e il componente vue. Devo elencare quel determinato attributo nelle `props` del componente, per renderlo accessibile a esso.

Il giro logico e': ho un array di dati nella mia `app` vue. Faccio diventare il singolo array un attributo con bind e lo importo nel componente con le props. A questo punto, nel mio componente avro accessibile ogni singolo elemento del singolo array con la dot notation, esempio: {{movie.title}}.


serve anche per stare in ascolto di un determinato attributo,es:
`<img v-bind:src="movie.img" alt="">`


-----------


