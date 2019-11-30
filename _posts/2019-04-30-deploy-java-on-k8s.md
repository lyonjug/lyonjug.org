---
title:  "Déploiement d'une application Java sur Kubernetes"
address: "INSA Lyon, Amphi Télécom, 6 Avenue des Arts, Villeurbanne"
address-link: "https://goo.gl/maps/jJfcfezozUTjGz3J6"
meetup-event-id: "260282819"
---

**19h00 à 19h15 : Accueil**

**19h15 à 19h30 : Lightning talk**

Vous ne savez pas ce qu'est un gestionnaire de fenêtres par pavage ?! 
Ça tombe bien, Victor nous présentera i3wm, un environnement de bureau pour Linux qui se veut simple, rapide, léger et totalement personnalisable.

**19h30 à 22H30 : {{ page.title }}**

Dans cette présentation, nous déploierons une application, composée d'un serveur Java et de sa base de données, vers un serveur Kubernetes. 
L'objectif est de montrer comment déployer une application dockerisée sur le poste de développeur ou à partir d'outils d'intégration continue comme Jenkins.
Nous commencerons par créer deux Charts Helm qui décrivent le déploiement de l'application et de la base de données. 
Nous déploierons les charts sur le cluster via la ligne de commande Helm.
Pour améliorer l'expérience développeur, nous mettrons en place via Skaffold un déploiement continu de l'application vers un serveur Kubernetes local (minikube).
Finalement, nous configurerons un job Jenkins pour déployer l'application. Le job gère notamment, par environnement cible, des propriétés et des secrets (chiffrés via helm secrets).

*Développeur Java depuis 2002 et Nantais @ Softeam depuis 2011, Mehdi El Kouhen adore travailler sur des sujets de dev, d'industrialisation & de déploiement. 
Il est fan de Docker et de son écosystème, en particulier de Kubernetes.*