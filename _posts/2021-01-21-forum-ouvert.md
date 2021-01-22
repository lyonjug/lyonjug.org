---
title: "Forum ouvert avec Software Crafters Lyon"
address: "Discord"
address-link: "https://discord.gg/mDsKaYjXHJ"
meetup-event-id: "275565153"
---

Pour bien débuter l'année et reprendre les bonnes habitudes nous vous proposons une soirée forum ouvert pour échanger et discuter.
Vous voulez partager votre dernière lecture, dernière découverte, demander de l'aide sur un problème de votre projet ?
Venez avec vos idées, vos envies, et nous construirons le programme de cette session ensemble.

Le forum Ouvert (en anglais Open Space ou Open Space Technology) est une méthode pour structurer des conversations et des conférences.
N'importe qui peut proposer un sujet qu'il a envie d'aborder, qu'il le connaisse très bien ou pas du tout (c'est l'occasion d'apprendre).
Des salles virtuelles seront alors créées pour chacun des sujets et les participants peuvent passer d'une salle à l'autre comme bon leur semble pendant la soirée.

Nous faisons cette session conjointement avec les Software Crafters de Lyon car ils ont de l'expérience dans ce genre d'évènements, et c'est l'occasion de leur poser des questions comme "C'est quoi le Software Craftmanship ?" ;)

## Compte-rendu
### Session 1 : 19h30 - 19h50
#### Salle 1 : Le DDD, comment l'aborder ? Comment l'appliquer ?
Faire du DDD: orientation métier, mettre au centre le métier, distinguer le métier pour faire en sorte que l'application reste maintenable.

Context technique : pertinent de faire du DDD ? une question de besoin de performance ?
Le critère est plutôt la complexité du métier.
Le pattern "stratégie" peut permettre de bien délimiter les parties techniques ou simples et les parties complexes.

Impossible si pas de contact avec les experts métiers ?
Beaucoup plus difficile mais pas impossible.

Faire du DDD pour de l'orchestration d'API ?
Non pas forcément pertinent dans ce genre de situation.

Attention à ne pas lier la couche de persistence et le domaine métier, ce n'est pas compatible.

#### Salle 3 : C'est quoi le Software Craftsmanship ?
Des conceptions très différentes de ce qu'est le Software Crafstmanship.
Un ensemble d'outils pour se simplifier la vie via du TDD, DDD...
Le DDD est le boss de fin, complexe à appréhender.
Le TDD est plus simple à appréhender mais attention :  Test first != TDD.

#### Salle 4 : Comment refactorer un code pas totalement couvert par des tests mais qui possède beaucoup de dépendances ?
Golden master (?)

The Mikado method : reprend la philosophie TCR (Test, Commit or Revert) [https://blog.engineering.publicissapient.fr/2020/03/20/domptez-vos-refactoring-avec-la-mikado-method](https://blog.engineering.publicissapient.fr/2020/03/20/domptez-vos-refactoring-avec-la-mikado-method)

Attention : éviter de prendre trop de temps à réfactorer (définir le scope, on peut se retrouver à découvrir des impacts cachés)

#### Salle 5 : Lombok, oui ? non ?
C'est non ! ;)
Ou oui mais pour poser un logger avec une annotation.

#### Salle 6 : Comment choisir entre les paradigmes de programmation objet/fonctionnel/procédural ?
On commence souvent par l'objet puis on découvre le fonctionnel mais c'est difficile car le paradigme est très différent.
Lombok ? Ca incite a casser l'encapsulation.
C'est pas un soucis de mélanger les paradigmes.

### Session 2 : 19h55 - 20h15
#### Salle 1 : Quels workshops vous interesserait en ligne ?
* EventStorming
* Global Code Retreat
* CQRS : comprendre l'architecture, comment on construit un CQRS. Regarder une vidéo et en discuter ? Avoir une petite présentation puis rentrer dans le code.
* Lier le monde IA et Java : comment on récupère le modèle, comment on le transite ? Atelier F# avec Mathias.
* Workshop architecture hexagonale

#### Salle 2 : Quelle est la bonne manière d'initialiser les jeux de données de tests unitaires ?
Avoir une base unique dans laquelle sont les données ?
Pas top : les tests ne sont pas répétables + problèmes quand la structure change.

Utiliser les APIs de l'applicatif pour insérer les données (ou une API créée pour ça, sans règles de gestion) ?
Inconvénient : nécessite de repartir à zéro à chaque fois.

Framework type DBUnit ou DBSetup + Flyway

Pour la base de test, plusieurs approches : H2 (in-memory) ou TestContainers

Pour initialiser la structure : parfois l'ORM peut s'en occuper, sinon Flyway/Liquibase ?

#### Salle 3 : Comment savoir si l'herbe est plus verte ailleurs ?
Plutôt se poser les questions suivantes ?
* Est-ce que le degré d'inconfort est supportable ?
* Qu'apporte l'inconfort dans la position ?
* Quelles sont tes valeurs fortes ? A quel moment sont-elles heurtées ?
* Ton environnement de travail est-il supportable ?
* Question du salaire : valeur du salarié corrélée au montant du salaire ?

#### Salle 4 : Les design patterns c'est has-been ?
Les frameworks ne doivent pas être des contraintes.
On peut continuer à faire de l'OOP.
En gros : ça dépend xD
Des fois des patterns sont utilisés sans forcément le savoir.
Pratique surtout pour se comprendre entre pairs.

#### Salle 5 : Quel est la différence entre un bon et un mauvais projet ?
* Plusieurs aspects : techniques, humains, managériaux.
* Projet qui se passe bien : pas de micro-management, maturité de l'équipe, respect, confiance, responsabilité.
* Séparation build & run : frictions systémiques entre les groupes.
* Technos vieilles / pas maintenues -> difficile
* Dette technique / legacy -> pourquoi le code est comme ça / quelles sont les décisions sous-jacentes ?
* [http://pages.cs.wisc.edu/~remzi/Naur.pdf](http://pages.cs.wisc.edu/~remzi/Naur.pdf) -> du code sans les sachants sera quasiment toujours perçu comme du "code de merde"
* Technos adaptées aux problématiques et cas d'usages, concepts sous-jacents maitrisés
* Temps dédié pour monter en compétence et se former

### Session 3 : 20h20 - 20h40
#### Salle 1 : Y-a t'il une vie autre que @RestController into @Service into @Repository ?
C'est possible :D
Exemple concert de DDD :
[https://docs.google.com/document/d/1AnMeSI7RNA3zGQ2sKa0aKBThBeV6-CdDzn9fN1NGolQ/edit](https://docs.google.com/document/d/1AnMeSI7RNA3zGQ2sKa0aKBThBeV6-CdDzn9fN1NGolQ/edit)

#### Salle 4 : Faut-il être passionné ? (R)allumer le feu ! : faire naitre la passion (du dev) & combattre la fatigue
* On peut être très bon et professionnel sans être passionné
* Passion : est-ce que l'on ferait le même travail si on n'était pas payé ? Est-ce que c'est un loisir comme les autres ?
* Pas toujours simple de garder la motivation constamment
* Faire deux choses pour varier ? Casser la monotonie, découvrir de nouvelles choses
* Pomodoro pour rythmer la journée
* Ne pas hésiter à relativiser sur ses compétences et ses ambitions
