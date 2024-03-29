---
title: "Remèdes aux oomkill, warm-ups, et lenteurs pour des conteneurs JVM"
address: "Zenika Lyon, 5 Place Jules Ferry, Lyon"
address-link: "https://g.page/zenika-lyon?share"
meetup-event-id: "289629254"
---

**19h00 à 19h15 : Accueil**

**19h15 à 21h : Remèdes aux oomkill, warm-ups, et lenteurs pour des conteneurs JVM**

Mes conteneurs JVM sont en prod, oups ils se font oomkill, oups le démarrage traîne en longueur, oups ils sont lents en permanence.
Nous avons vécu ces situations.
Ces problèmes émergent parce qu'un conteneur est par nature un milieu restreint.
Sa configuration a un impact sur le process Java, cependant ce process a lui aussi des besoins pour fonctionner.
Il y a un espace entre la heap Java et le RSS : c'est la mémoire off-heap et elle se décompose en plusieurs zones.
À quoi servent-elles ?
Comment les prendre en compte ?
La configuration du CPU impacte la JVM sur divers aspects : quelles sont les influences entre le GC et le CPU ?
Que choisir entre la rapidité ou la consommation CPU au démarrage ?
Au cours de cette présentation nous verrons comment diagnostiquer, comprendre et remédier à ces problèmes.

Développeur passionné par les performances, les runtimes (JVM, CLR) et adepte de Mechanical Sympathy, Jean-Philippe Bempel a plus de 8 ans d'expérience dans les systèmes de trading low latency.
Après avoir optimisé les ressources de larges clusters (2000+ noeuds) chez Criteo, il a intégré l'équipe Profiling de Datadog et contribue à Java Mission Control.
