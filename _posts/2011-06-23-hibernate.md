---
title: "Hibernate OGM"
address: "Epitech, 86 Boulevard Marius Vivier-Merle, Lyon"
address-link: "https://goo.gl/maps/A5gE6yB1ygGReCQw5"
---

**19h00 à 19h15 : Accueil**

Lire
[l'interview d'Emmanuel Bernard](http://jduchess.org/duchess-france/blog/hibernons-avec-emmanuel-bernard/)
par Agnès et Cédric.

**19h15 à 20h15 : {{ page.title }} : JPA pour NoSQL**

PaaS (Plate-forme as a Service), Cloud, élasticité. Ces mots font le buzz ces temps-ci. Mais le vrai challenge c'est comment et où stocker vos données. Dans un data grid pour bénéficier de la scalabilité? Via une API propriétaire? Est-ce que l'on pourrait utiliser une API familière?
L'objectif d'Hibernate OGM est d'explorer comment réutiliser Java Persistence et son API familière pour persister les entités dans une base de données non relationnelle.

[Hibernate Object/Grid Mapper (OGM)](http://www.hibernate.org/subprojects/ogm.html)
offre une implémentation JPA (manipulation d'objet et requêtes JP-QL) tout en stockant et requêtant les données d'une grille clé/valeur (et d'autres approches NoSQL dans un second temps). Autrement dit, il offre une API familière tout en permettant de bénéficier des possibilités de scalabilité des data grids. Cela inclus notamment de supporter des applications JPA existantes.

Dans cette présentation, nous allons:

* faire un survol du monde (NoSQL) et voir en quoi une API comme JPA apporte un intérêt,
* voir comment Hibernate OGM stocke les entités et les associations dans la base clé/valeur et explorer les compromis fait,
* voir comment les requêtes JP-QL sont implémentés au dessus d'une technologie qui ne supporte pas la notion de requête (clé/valeur) et quel niveau peut être couvert,
* faire une démo d'Hibernate OGM

**20h15 à 20h45 : Buffet**

**20h45 à 21h15 : Le monde d'Hibernate: panel de discussion**

Hibernate a bien évolué depuis ses débuts. Il n'est plus un simple ORM mais plutôt un ensemble de projects qui tournent autour du modèle métier.

[Hibernate Core](http://www.hibernate.org/) : l'ORM et l'implémentation JPA
[Hibernate Validator](http://www.hibernate.org/subprojects/validator.html) : définir les contraintes du modèle métier via des annotations
[Hibernate Search](http://www.hibernate.org/subprojects/search.html) : offrir de la recherche full-texte (à la Google) au dessus des bases de données
[Hibernate OGM](http://www.hibernate.org/subprojects/ogm.html) : Offrir JPA pour des solutions NoSQL et Infinispan en particulier
[Hibernate Envers](http://www.jboss.org/envers) : offrir le support de l'historisation des données.

*Emmanuel Bernard
( <i class="fab fa-twitter"></i><span class="d-sm-none"> Twitter</span> [@emmanuelbernard](http://twitter.com/emmanuelbernard))
est architecte plate-forme données à JBoss by Red Hat et un member de l'équipe Hibernate.
Diplômé de Supélec, Emmanuel Bernard a passé quelques années dans le secteur de la grande distribution où il a commencé à s'impliquer dans le monde de l'ORM. Il a rejoint l'équipe Hibernate en 2003.
Emmanuel a dirigé l'implementation JPA d'Hibernate. Il a fondé et dirige Hibernate Search, Hibernate Validator et le petit nouveau Hibernate OGM.
Emmanuel est membre de l'expert group JPA 2.0 et spec lead de Bean Validation.
Il intervient régulièrement dans diverses conférences et JUGs, dont JavaOne, JBoss World, Devoxx et est le co-auteur d'Hibernate Search in Action publié par Manning.
Il est aussi le fondateur et co-hôte de deux podcasts:
[Les Cast Codeurs](http://lescastcodeurs.com/)
(français) et
[JBoss Community Asylum](http://asylum.jboss.org/)
(anglais).*

[Télécharger les slides](http://emmanuelbernard.com/various/presentations/hibernate-ogm-concepts-1.1.pdf)

[Enregistrement MP3](http://pod.cast-it.fr/lyonjug-23-06-2011-ogm.mp3)

[Enregistrement iTunes](http://pod.cast-it.fr/lyonjug-23-06-2011-ogm.m4a)