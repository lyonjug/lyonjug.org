---
title: "Architecture Katas and Microservices"
address: "Zenika Lyon, 5 Place Jules Ferry, Lyon"
address-link: "https://g.page/zenika-lyon?share"
meetup-event-id: "290953607"
---

**19h00 à 19h15 : Accueil**

**19h15 à 20h : Architecture Katas and Microservices**

Comment devenir architecte ? Comment progresser dans ce domaine ? A quoi reconnaît-on une bonne ou une mauvaise architecture ? Il existe certes un grand nombre d' ouvrages et formations sur le sujet, mais le mieux est quand même de pratiquer !
Une solution à ce problème pourrait être donc de s’entraîner régulièrement sur des sujets différents pour gagner en expérience.
Pour rendre l’apprentissage de l’architecture et de la conception plus empirique - et plus ludique, nous allons découvrir les Katas d’Architecture au travers d’un retour d’expérience. Nous découvrirons comment les mettre en œuvre ainsi que les bénéfices que j’en ai tirés.

*Alexandre Touret* est architecte et développeur sénior chez Worldline. Son activité consiste à coder (principalement en Java), coacher des développeurs et concevoir des architectures.

**20h à 21h: Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?**

Les architectures microservices ont le vent en poupe. Elles présentent de nombreux avantages pour mettre en place les bonnes pratiques DevOps et faire travailler en parallèle des équipes pluridisciplinaires autonomes. Evoluer du monolithe vers les microservices n’est pas un long fleuve tranquille… Les challenges ne manquent pas. L’un d’entre eux, et non des moindres, est la cohérence des données. Un des principes de base est que chaque service possède sa propre base de données. Quand une transaction métier invoque plusieurs services, on ne peut donc plus compter sur les bonnes vieilles transactions ACID des serveurs SQL.
Quant aux transactions distribuées XA/2PC, oubliez les, elles sont jetées au pilori des mauvaises pratiques depuis bien longtemps ! Une fois ce constat établi, on fait quoi concrètement ? Comment peut-on répondre à cette problématique ? Dans cette présentation, nous verrons comment procéder avec deux approches : les SAGA et les LRA (Long Running Action). Un exemple concret basé sur MicroProfile et le framework Eeventuate Tram vous permettra de les appréhender et de choisir la bonne option pour votre projet Microservices 

*Jean-Francois James* se définit avant tout comme un "Coding Software Architect". Nommé Expert Fellow à Atos puis Worldline, il est responsable de la toute nouvelle initiative TechRel qui vise à promouvoir l'entreprise dans les communautés Tech. Il aime bien partager et challenger mes connaissances à travers des articles, des présentations, des démos. Il y a toujours quelque chose à apprendre et améliorer ! Son bagage technique est centré sur l'écosystème Java dont l'évolution permanente ne cesse de me passionner. Il a eu l'opportunité de contribuer au projet Open Source Eclipse MicroProfile. Bref, il reste très enthousiaste malgré mes plus de 30 ans dans l'IT.