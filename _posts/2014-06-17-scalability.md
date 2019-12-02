---
title: "Highly scalable backend with Thrift, MongoDB & Non blocking IO"
address: "Epitech, 86 Boulevard Marius Vivier-Merle, Lyon"
address-link: "https://goo.gl/maps/A5gE6yB1ygGReCQw5"
---

**19h00 à 19h15 : Accueil**

**19h15 à 19h30 : Lightning talk**

Docker, par Jonathan Dray

**19h30 à 22h30 : {{ page.title }}**

*Par Sébastien Lambour*

La plupart des framework de persistance utilisent l'API de reflexion pour le data binding des objets venant d'un store (Mongo ou autre).
Cette méthode a des conséquences importantes sur les performances, temps de réponse et consommation mémoire du serveur.

Quand vous avez un backend de services internes relié à votre Front (Grails, Play...) il devient la pierre angulaire de votre système.
La présentation a pour but de comparer un service de messagerie (comme Hangout) avec 2 angles :
* Backend REST full Spring / Spring Data / MongoDB
* Backend Thrift /  ThriftMongoBridge / MongoDB

Une comparaison objective sera présentée sur les axes :
* consommation CPU / mémoire
* IO serveur / temps de réponse
* productivité du développeur
* testabilité du backend