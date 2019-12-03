---
title: "Messaging"
address: "Epitech, 86 Boulevard Marius Vivier-Merle, Lyon"
address-link: "https://goo.gl/maps/A5gE6yB1ygGReCQw5"
---

**19h00 à 19h15 : Accueil**

**19h15 à 20h15 : Le protocole AMQP et son implémentation Apache Qpid**

Lire
[l'interview d'Arnaud Simon](http://jduchess.org/duchess-france/blog/soiree-messaging-au-lyon-jug-rencontre-avec-arnaud-simon-de-redhat/)
par Agnès Crépet pour les JDuchess.

AMQP (pour Advanced Message Queuing Protocol) est une spécification open source qui vise à standardiser l'échange de messages entre applications. Un consortium formé par Red Hat, Cisco Systems, iMatix, Microsoft,... en est à l'origine.
AMQP n'a pas pour vocation de remplacer JMS mais a été conçu avec comme objectif de supporter JMS. La spécification AMQP définit, de même que JMS, les sémantiques d'échange des messages mais aussi le protocole d'échange. Cela permet une réelle inter-opérabilité des implémentations d'AMQP. Ainsi, toutes les implémentations d'AMPQP peuvent interagir entre elles, quels que soient les langages utilisés. Par exemple, il est possible à des applications JMS d'échanger des messages avec des applications Python, .Net ou C++.
Dans cette présentation, nous introduirons la dernière version d'AMQP. Nous nous appliquerons à faire le lien entre les concepts spécifiques à AMQP et ceux bien connus de JMS. Nous mettrons aussi en avant les avantages d'AMQP sur JMS. Une attention particulière sera portée au projet Qpid -- qui est l'implémentation d'AMQP hébergée par Apache -- et plus particulièrement à sa librairie JMS.

*Arnaud Simon is senior solution architect for Red Hat middleware division. Arnaud joined Red Hat as a principal software engineer working for Red Hat middleware division on strategic messaging AMQP and ESB products. Arnaud contributed to
write the AMQP specifications and is an Apache contributor for the Qpid project. Prior to that, he was an ESB, SOA architect for Innovation Process Technology IPT, a European systems integrator based in Switzerland. Prior to this Arnaud was leading the JMS Message Service Team for Arjuna Technologies Limited, a UK based spin-off from Hewlett-Packard where he was a senior research and development engineer, with a primary focus on the design and continual development of this product. Arnaud obtained a PhD in Computing Science from INRIA, University Nancy I (France) in 2000 and completed research posts with a primary focus on distributed computing and data mining at both INRIA and Newcastle University.*

**19h30 à 22h30 : HornetQ**

Lire
[l'interview de Jeff Mesnil](http://jduchess.org/duchess-france/blog/soiree-messaging-au-lyon-jug-rencontre-avec-jeff-mesnil-sur-hornetq/)
par Agnès Crépet pour les JDuchess.

Cette présentation montre comment HornetQ est adapté aux technologies du Web sous toutes ses formes.
[HornetQ](http://www.jboss.org/hornetq)
fournit une API REST pour envoyer et recevoir des messages de n'importe quel environnement avec une bibliothèque HTTP. HornetQ adopte aussi HTML5 en fournissant le support pour des Web Sockets pour envoyer et recevoir des messages depuis la dernière génération de navigateurs.
La présentation utilisera une application Web de géolocalisation interactive avec une topologie pub/sub démontrant la cohérence de cet ensemble. Le Web et le messaging forment une combinaison puissante et cette présentation l'illustrera.

<iframe src="//www.slideshare.net/slideshow/embed_code/key/mvwjg8lHozt1BL" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/lyonjug/hornetq-and-the-web" title="201101 HornetQ" target="_blank">201101 HornetQ</a> </strong> from <strong><a href="https://www.slideshare.net/lyonjug" target="_blank">lyonjug</a></strong> </div>
