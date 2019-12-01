---
title:  "Boîte à outils mémoire de la JVM"
address: "INSA Lyon, Amphi Télécom, 6 Avenue des Arts, Villeurbanne"
address-link: "https://goo.gl/maps/jJfcfezozUTjGz3J6"
meetup-event-id: "250299798"
---

**19h00 à 19h15 : Accueil**

**19h15 à 22H30 : {{ page.title }}**

Vous vous êtes peut-être retrouvés dans cette situation : votre JVM se met à faire des GC à toute allure, Out Of Memory Error ! 
Que s'est-il passé ? 
Comment s'y prendre pour mener l'enquête ?

Nous commencerons par exposer la problématique. 
Nous allons voir comment la JVM utilise la mémoire et présenter différentes possibilités de dysfonctionnement.

Ensuite, nous allons présenter une boîte à outils mémoire pour diagnostiquer ce qui se passe dans notre JVM malade. 
Le fil conducteur sera principalement l'investigation de soucis de mémoire d'une application. 
Durant l’enquête, différents outils seront présentés : lignes de commande, GC Viewer, Java Mission Control, Memory Analyzer Tool, JOverflow et quelques autres.

*Jean Bisutti 
( <i class="fab fa-twitter"></i><span class="d-sm-none"> Twitter</span> [@jean_bisutti](http://twitter.com/jean_bisutti)) est consultant. 
Il développe principalement en Java et intervient sur des problématiques de performance. 
Adepte de pratiques de développement issues de la mouvance Software Craftsmanship (TDD, pair programming, BDD, clean code, ...), 
il apprécie en faire la promotion. 
Actuellement, Jean développe aussi QuickPerf 
( <i class="fab fa-twitter"></i><span class="d-sm-none"> Twitter</span> [@QuickPerf](http://twitter.com/QuickPerf)), 
une extension JUnit pour évaluer rapidement certainement propriétés de performance. 
Prochainement disponible en open source.*