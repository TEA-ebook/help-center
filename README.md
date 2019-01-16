TEA Help Center
===============

## Pré-Requis

* Ruby
* NodeJS

## Tester en local

1. Lancer Jekyll : 
```sh
bundle exec jekyll serve
```

2. Copier/coller l'url générée (http://localhost:4000/) dans un navigateur web

On supposera pour les actions ci-dessous que le projet git-hub "help-center" a été installé dans workspace/help-center. Ainsi, pour tous les points suivants, la ligne de commande est à lancer depuis ce dossier : `cd workspace/help-center`
* Pour vérifier quelle branche est affichée : `git branch -v`
* Pour mettre à jour le projet git-hub : `git pull`
* Pour changer de branche : `git checkout [nom de la branche telle qu'affichée dans git-hub]`

## Tester les liens morts

```sh
bundle exec rake test_dead_links
```

## Liens problématiques présents dans ces pages d'aides :

1. Le lien fait référence à une page de magasin et ne peut être générique.
2. Dans l'aide en marque blanche actuelle, le lien fait référence à une page inexistante chez Cultura.

### Acheter un ebook

- Création de compte client¹.
- CGV¹.

### Liseuses TEA

- Cybook Odyssey HD Frontlight².
- Cybook Odyssey 2013 Edition².

De plus, ces pages contiennent probablement des liens obsolètes.
