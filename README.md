# Projecte M06-UF4 → AJAX_RScat_LucasPadilla

![captura_git](https://user-images.githubusercontent.com/58809030/109426820-cc7fbc00-79ef-11eb-9db7-eb1e03924828.png)

1. Indicacions

Heu de llegir tota la pràctica i comprendre el que es demana.
Heu de fer servir els coneixements adquirits en les unitatsformatives anteriors així com els continguts donats en la present UF.

2. Projecte a desenvolupar

Heu de desenvolupar una aplicació web de forma individual des d’on es pugi obtenir dades de servidors de dades obertes i públics i 
l’aplicació n’ha de mostrar el contingut en format taula, ha d’ubicar la informació dins d’un mapa, i l’ha de mostrartambé en format gràfic.

3. Tasques a realitzar:

● 1. Cerca algun origen de dades obertes que subministri la informació en format XML i/o JSON.
El desitjable és que siguin dades que s’actualitzin sovint o altrament que pugis (mitjançant URL diferents) obtenir les mateixes dades però d’anys/mesos 
diferents(dades obertes dels mossos d’esquadra ho permeten). No es pot utilitzar cap origen de dades utilitzat en pràctiques anteriors o a classe. 

● 2. L'aplicació ha de permetre obtenir les dades quan l’usuari ho desitgi (per exemple, cada cop que pitgi un botó). 
Si pot seleccionar diferents anys (o qualsevol altre camp que digui la web d’origen) l’usuari els ha de poder seleccionar i, en cas contrari, l’usuari ha de poder
seleccionar l’interval de temps en el qual la nostra aplicació obtindrà dades del servei de dades obertes.

● 3. La nostra web ha de mostrar en format text (html) el fet de que s’ha actualitzat (als 5 segons ha de desaparèixer el missatge) juntament amb el conjunt de les 
dades en una taula dinàmica en Javascript.

● 4. La nostra web ha de poder ubicar en un mapa part de les dades obtingudes mitjançant Leaflet i Open Street Map 
(per a mostrar informació a un marcador heu d'utilitzar la opció title al mètode L.marker).

● 5. La nostra web ha de poder mostrar algun gràfic que resulti d’interès i extret de les dades obtingudes (mitjançant la API google Chart).

Heu d'utilitzar AJAX per a demanar informació als serveis de dades obertes i Leaflet, Open Street Map i Google Chart per representar les dades.

● Mostrar la taula amb tota la funcionalitat: 1,5 punts.

● Formulari per inserir amb tota la funcionalitat: 2,5 punts.

● Memòria: 1 punt.

4. Valoració:

La obtenció de dades amb AJAX, i l’ús simple de Leaflet, Open Street Map i google Chart, si està ben codificat i amb comentaris al codi equival a 5 (sobre 10) de nota.
Per obtenir més nota heu de fer una aplicació on l’usuari hi pugi interaccionar de diverses maneres amb una font de dades obertes interessant (fins a 1 punt més), i on
mostreu un mapa (o diversos) amb molt de contingut i funcionalitats (fins a 1 punt més) i on les gràfiques creades amb l’API de google Chart siguin complexes e 
interessants a la vegada (fins a 1 punt més). Els dos punts restants s’obtindrien si l’aplicació està molt ben organitzada
a nivell de codi i resulta a més a més molt atractiva (amb un ús adequat i encertat dels estils CSS).

La copia total o parcial comportarà un nota de zero a la pràctica per a tots els implicats.
