---
title: "Spring Boot CDS + Leyden / Paketo"
address: "SII, 120 bd Vivier Merle, Lyon"
address-link: "https://maps.app.goo.gl/VNwKorUDmgiMvDax7"
meetup-event-id: "304565702"
---

Duo de conférences "théorie et pratique" :

## Optimiser vos applications Spring Boot avec CDS et Project Leyden (20' env.)

* présentation du support de _Class Data Sharing_ (CDS) récemment introduit dans Spring Boot pour optimiser vos applications
* aperçu des évolutions qui arrivent avec Project Leyden. 
* comparatif détaillé des critères qui peuvent permettre de choisir entre ces technologies et _GraalVM native image_ ou Project CRaC

_S. Deleuze_ travaille chez Broadcom en tant que core committer Spring Framework.  
Il a introduit le support de Kotlin dans les projets Spring, et anime le groupe de travail "Spring Efficiency" qui vise à optimiser les applications Spring Boot en production.  
Il est également fan de WebAssembly depuis 2016, Kotlin Google Developer Expert et un ancien membre de l'équipe qui organise la conférence MiXiT.


## Paketo Buildpacks : la meilleure façon de construire des images OCI? (25' env.)

Les développeurs Java ont l'embarras du choix pour créer leurs images Docker (ou OCI): Dockerfile, Jib et les Cloud Native Buildpacks (CNCF).
* Que sont ces derniers et en particulier les buildpacks Paketo que Spring Boot utilise par défaut ?
* Sont-ils une bonne alternative au Dockerfile et à Jib ?
* Comment en tirer partie dans l'environnement existant ? (dans une pipeline de CI/CD, sur un PaaS, etc.)

_A. Dahane_ est développeur logiciel depuis plus de 15 ans, ses sujets préférés sont la containerisation (Docker, Kubernetes), les outils pour développeurs, l’intégration continue et bien sûr le développement en Java.  
Depuis presque 2 ans, il a rejoint l'équipe de maintenance des Buildpacks Java (open source et commerciaux) à Broadcom (ex-VMware).  
Dans mon temps libre, il lui arrive de travailler sur des projets persos comme des bots Mastodon, des calendrier d'événements tech, etc. en Go, Java et même Android.
