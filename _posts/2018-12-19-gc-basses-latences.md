---
title:  "GC basses latences & Java, le changement"
address: "INSA Lyon, Amphi Télécom, 6 Avenue des Arts, Villeurbanne"
address-link: "https://goo.gl/maps/jJfcfezozUTjGz3J6"
meetup-event-id: "257010829"
---

**19h00 à 19h15 : Accueil**

**19h15 à 20h :  Comprendre les GC basses latences**

Depuis quelques années, le monde du GC sur la JVM évolue. 
Une nouvelle catégorie de GC émerge: Les GC basses latences (low latency). 
Shenandoah est mis à disposition par Red Hat, Oracle a mis en open Source ZGC dans l'OpenJDK depuis le JDK 11 et Azul C4 est toujours là.
Comme les GC "classiques" sont plutôt bien compris maintenant, cette présentation s'attardera sur les arcanes des plus récents. 
Nous allons expliquer le concurrent marking (tri-color marking), la Load Value Barrier de C4, les Brooks pointers de Shenandoah et le multi-mapping de ZGC.

*Développeur passionné par les performances, les runtimes (JVM, CLR) et adepte de Mechanical Sympathy, 
Jean-Philippe Bempel a plus de 8 ans d'expérience dans les systèmes de trading low latency. 
Maintenant il apporte son expertise sur la JVM chez Criteo afin d'optimiser les resources sur des clusters d'applications de plusieurs milliers de noeuds.*

**20h à 21h30 : Java, le changement c'est maintenant (... enfin depuis un an déjà)**

Ce n'est pas qu'un slogan politique mais bien la réalité pour Java depuis l'année écoulée.
A tel point que plusieurs caractéristiques historiques de Java sont partiellement remises en cause notamment la lenteur patente entre deux releases, 
l'embonpoint endémique du JRE/JDK, et même la sacro sainte rétro-compatibilité, ... 
Faisons un tour de ces évolutions qui sont parfois de profonds changements.

*Passionné par le développement de logiciels et par la veille technologique, je possède une longue expérience, en SSII/ESN et personnelle, dans l'écriture d'applications avec différents langages. 
Je suis actuellement le CTO d’Oxiane Luxembourg et du groupe Oxiane.
Utilisant Java depuis sa version 1.0, j'aime partager ma passion pour cette plateforme et son écosystème notamment en me consacrant, depuis presque vingt années, à la rédaction de deux tutoriels, intitulés "Développons en Java", diffusés sous licence GNU FDL. 
Ce travail m'a permis d'être nommé Java Champion. 
Je suis également un des cofondateurs du Lorraine JUG.*
