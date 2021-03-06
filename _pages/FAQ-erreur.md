---
permalink: "/faq-erreurs/"
layout: page
title: Foire Aux Questions - Erreurs courantes
type: faq
---

{% include anchor.html id="autres" label="Erreurs courantes" %}

### Erreurs courantes


{% include anchor.html id="livre-abime-protege" label="Impossible de lire ce livre il est peut-être abîmé ou protégé (sur liseuse)" %}

#### Impossible de lire ce livre il est peut-être abîmé ou protégé (sur liseuse)

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

Cette erreur apparaît quand un livre protégé est ouvert avec un mauvais ou sans identifiant Adobe.
Il faut donc vérifier avec que le livre n'a pas été précédemment ouvert avec un autre identifiant Adobe ou sans identifiant sur un ordinateur.

* Si vous vous êtes trompé d'identifiant, il faut enregistrer le bon identifiant dans votre support. Si ça ne fonctionne toujours pas, contactez le service client pour procéder à une réinitialisation du ou des livres concernés.
* Si vous avez ouvert votre livre avec Adobe Digital Editions sans identifiant Adobe, contactez le service client pour procéder à une réinitialisation du ou des livres concernés.

[Vérifier avec quel identifiant Adobe le support a été autorisé.](/faq-comptes/#authorized-identifiant-adobe)

{% include feedback-button.html question="Impossible de lire ce livre il est peut-être abîmé ou protégé (sur liseuse)" %}

{% include anchor.html id="protege-adobe-DRM" label="Ce livre est protégé par Adobe DRM. Pour le lire vous devez activer votre compte Adobe sur votre appareil..." %}

#### Ce livre est protégé par Adobe DRM. Pour le lire vous devez activer votre compte Adobe sur votre appareil...

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

Il s'agit d'un message d'avertissement qui apparaît lors du premier téléchargement ou de la première ouverture d'un livre protégé, si vous n'avez pas autorisé votre appareil avec votre identifiant Adobe.

* Il faut d'abord créer un compte Adobe sur le [site d'Adobe](https://adobeid-na1.services.adobe.com/renga-idprovider/pages/create_account?client_id=adobedotcom2&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fadobedotcom2%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Ffr%252F%2523from_ims%253Dtrue%2526old_hash%253D%252523%2526api%253Dauthorize%26scope%3Dcreative_cloud%252CAdobeID%252Copenid%252Cgnav%252Cread_organizations%252Cadditional_info.projectedProductContext%252Csao.ACOM_CLOUD_STORAGE%252Csao.stock%252Csao.cce_private&client_redirect=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fredirect%2Fadobedotcom2%3Fclient_redirect%3Dhttps%253A%252F%252Fwww.adobe.com%252Ffr%252F%2523from_ims%253Dtrue%2526old_hash%253D%252523%2526api%253Dauthorize&denied_callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fdenied%2Fadobedotcom2%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Ffr%252F%2523from_ims%253Dtrue%2526old_hash%253D%252523%2526api%253Dauthorize%26response_type%3Dtoken%26scope%3Dcreative_cloud%252CAdobeID%252Copenid%252Cgnav%252Cread_organizations%252Cadditional_info.projectedProductContext%252Csao.ACOM_CLOUD_STORAGE%252Csao.stock%252Csao.cce_private&display=web_v2&locale=fr_FR&relay=26c0f864-18d4-422c-8048-1f1d5fe0039b&flow=true&flow_type=token&dc=false&eu=false&idp_flow_type=login) depuis un ordinateur (ou une tablette).
* Suivre les instructions à l'ouverture du livre :
    * Connecter le wifi
    * Renseigner le compte Adobe
    * Activer l'appareil

{% include feedback-button.html question="Ce livre est protégé par Adobe DRM. Pour le lire vous devez activer votre compte Adobe sur votre appareil..." %}

{% include anchor.html id="ADE-Windows10" label="Adobe Digital Editions sur Windows 10" %}

#### Adobe Digital Editions sur Windows 10

Vous avez un ordinateur sur Windows 10 et vous rencontrez des difficultés à télécharger ou transférer des ebooks avec Adobe Digital Editions ?
C'est probablement à cause d'une incompatibilité entre Windows 10 et les dernières mises à jour du logiciel Adobe Digital Editions.
Nous vous conseillons de désinstaller Adobe Digital Editions et de réinstaller une ancienne version du logiciel.
[Télécharger une ancienne version de Adobe Digital Editions.](http://www.adobe.com/support/digitaleditions/downloads.html)

{% include feedback-button.html question="Adobe Digital Editions sur Windows 10" %}



{% include anchor.html id="error-check-activation" label="Error check activation" %}

#### Error check activation

Cette erreur indique que l'autorisation de l'ordinateur est invalide ou corrompue.

##### Solution 1 :

1. Supprimer l'autorisation de l'ordinateur dans Adobe Digital Editions (ctrl + Maj + D sous windows) ou (cmd + Maj + D sous Mac).
2. Désinstaller Adobe Digital Editions (dans Panneau de configuration > Programmes)
3. Installer la dernière version d'[Adobe Digital Editions](http://www.adobe.com/fr/solutions/ebook/digital-editions/download.html)
4. Autoriser l'ordinateur

##### Solution 2 :

* Autoriser le logiciel dans le pare-feu.
    * Pour le pare-feu de Windows :
        1. Ouvrir le pare-feu Windows
        2. Cliquer sur Démarrer > Panneau de configuration > Firewall
        3. Sélectionner l'onglet Exceptions
        4. Ajouter une exception pour Adobe Digital Editions
        5. Cliquer sur « Ajouter un programme »
        6. Double-cliquer sur Adobe Digital Editions dans la liste
        7. Cliquer sur OK

##### Solution 3 :

Les versions 4.0.0 et 4.0.1 d'Adobe Digital Editions génèrent régulièrement cette erreur. Il est donc conseillé de les mettre à jour avec la version 4.0.3

##### Solution 4

* **Windows :**
    1. Ouvrir Adobe Digital Editions.
    2. Appuyer sur Ctrl+Shift+D sur le clavier et supprimer l'autorisation de Digital Editions.
    3. Désinstaller Adobe Digital Editions de l'ordinateur.
        * Cliquer sur Démarrer > Panneau de configuration > Programmes > Programmes et fonctionnalités.
        * Séléctionner Adobe Digital Editions dans la liste et supprimer.
    4. Supprimer aussi les fichiers suivant.
        * Cliquer sur Démarrer > Exécuter. (Dans windows 7 ou 8, il faut utiliser la fonction recherche et taper « executer » ou « run »)
        * Taper « regedit » dans la boite de dialogue et taper sur Entrée.
        * Localiser la clé suivante « HKEY\_CURRENT\_USER>Software>Adobe>Digital Editions »
        * Supprimer le dossier complet (faire un clic droit dessus et cliquer sur Supprimer).
        * Localiser aussi HKEY\_CURRENT\_USER>Software>Adobe>Adept
        * Supprimer le dossier complet.
    5. Télécharger et installer [Adobe Digital Editions](http://www.adobe.com/products/digitaleditions/).
    6. Pour autoriser l'ordinateur, utiliser le même Adobe ID et mot de passe que précédemment.
    7. Ouvrir un livre.
* **Mac :**
    1. Dans le finder : Dans l'onglet « Aller », sélectionner « Aller au dossier »
    2. Taper : ~/Library/Application Support/Adobe/Digital Editions et déplacer le fichier activation.dat dans la corbeille.
    3. Ré-autoriser Adobe Digital Editions avec votre identifiant Adobe.

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

{% include feedback-button.html question="Error check activation" %}


{% include anchor.html id="400-bad-request" label="Erreur : « 400 Bad Request » à l'ouverture de la librairie ou de mes Achats sur liseuse" %}

#### Erreur : « 400 Bad Request » à l'ouverture de la Librairie ou de Mes Achats sur liseuse

Pour corriger cette erreur, il faut supprimer les cookies dans le navigateur de votre liseuse, en suivant les étapes suivantes :

 * Depuis la page d'accueil de votre liseuse, ouvrir le menu du bas en appuyant sur les deux traits horizontaux.
 * Sélectionner le navigateur.
 * Appuyer sur l'icone menu (trois traits horizontaux) à droite de la barre d'adresse
 * Appuyer ensuite sur « Paramètres », puis sur « Effacer les cookies »
 * Fermer le navigateur pour revenir à la page d'accueil de votre liseuse.
 * Ré-essayer alors de vous connecter à votre librairie.


 {% include feedback-button.html question="400 Bad request" %}





{% include anchor.html id="erreurs-adobe" label="Erreurs Adobe Digital Editions" %}

### Erreurs Adobe Digital Editions

{% include anchor.html id="act-not-ready" label="E_ACT_NOT_READY" %}

#### E\_ACT\_NOT\_READY

Cette erreur indique que vous ne pouvez pas changer l'autorisation Adobe de votre PC, même après une autorisation SANS ID.  
Il faut donc retirer manuellement l'autorisation de l'ordinateur.

* Mac :
    1. Dans le finder : Dans l'onglet « Aller », sélectionner « Aller au dossier »
    2. Taper : ~/Library/Application Support/Adobe/Digital Editions et déplacer le fichier activation.dat dans la corbeille.
    3. Ré-autoriser Adobe Digital Editions avec son identifiant Adobe.
* Windows :
    1. Cliquer sur Démarrer > Exécuter. (Dans windows 7 ou 8, il faut utiliser la fonction recherche et taper « executer » ou « run »)
    2. Taper « regedit » dans la boite de dialogue et taper sur Entrée.
    3. Localiser la clé suivante « HKEY_CURRENT_USER>Software>Adobe>Digital Editions » et supprimer le dossier complet (faire un clic droit dessus et cliquer sur « Supprimer »).
    4. Localiser aussi HKEY_CURRENT_USER>Software>Adobe>Adept et supprimer le dossier complet.
    
<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

{% include feedback-button.html question="E_ACT_NOT_READY" %}


{% include anchor.html id="duplicate-transaction" label="E_ADEPT_DUPLICATE_TRANSACTION_ID" %}

#### E\_ADEPT\_DUPLICATE\_TRANSACTION\_ID

Lorsque vous rencontrez ce message, cela signifie que votre autorisation Adobe ID n'est plus reconnue par le logiciel Adobe Digital Editions.
Contactez votre Service Clients et demandez une réinitialisation du lien de votre livre numérique.

{% include feedback-button.html question="E_ADEPT_DUPLICATE_TRANSACTION_ID" %}


{% include anchor.html id="request-expired" label="E_ADEPT_REQUEST_EXPIRED" %}

#### E\_ADEPT\_REQUEST\_EXPIRED

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

Cette erreur indique que le fichier `acsm` téléchargé est trop vieux. Les fichiers de licences `acsm` ont une durée de validité limitée (entre 3 et 5 jours). Ils doivent donc être ouverts dans ce laps de temps.

Pour résoudre ce problème, supprimez le fichier `acsm` et téléchargez-en un nouveau depuis votre compte client. Puis ouvrez  le fichier pour télécharger le livre.

Si le problème persiste il faut vous assurez que la date, l'heure et le fuseau horaire de votre support sont correctement paramétrés.
Vous pouvez le vérifier simplement en tapant l'adresse <http://time.is> dans le navigateur du support.

Pour modifier les paramètres Date/heure :

* Sur une liseuse TEA :
    * Aller dans « Paramètres ».
    * Puis dans « Date et heure ».
    * Vérifier que le fuseau horaire est bien celui de Paris.
    * Appuyer ensuite sur « Synchroniser l'heure ».
    * Activer aussi la « Synchronisation automatique de l'heure », en appuyant sur le bouton On/Off

{% include feedback-button.html question="E_ADEPT_REQUEST_EXPIRED" %}


{% include anchor.html id="not-ready" label="E_AUTH_NOT_READY" %}

#### E\_AUTH\_NOT\_READY

Cette erreur indique que vous ne pouvez pas changer l'autorisation Adobe de votre PC, même après une autorisation SANS ID.  
Il faut donc retirer manuellement l'autorisation de l'ordinateur.

* Mac :
    1. Dans le finder : Dans l'onglet « Aller », sélectionner « Aller au dossier »
    2. Taper : ~/Library/Application Support/Adobe/Digital Editions et déplacer le fichier activation.dat dans la corbeille.
    3. Ré-autoriser Adobe Digital Editions avec son identifiant Adobe.
* Windows :
    1. Cliquer sur Démarrer > Exécuter. (Dans windows 7 ou 8, il faut utiliser la fonction recherche et taper « executer » ou « run »)
    2. Taper « regedit » dans la boite de dialogue et taper sur Entrée.
    3. Localiser la clé suivante « HKEY_CURRENT_USER>Software>Adobe>Digital Editions » et supprimer le dossier complet (faire un clic droit dessus et cliquer sur « Supprimer »).
    4. Localiser aussi HKEY_CURRENT_USER>Software>Adobe>Adept et supprimer le dossier complet.

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

{% include feedback-button.html question="E_AUTH_NOT_READY" %}


{% include anchor.html id="fulfilled-another" label="E_LIC_ALREADY_FULFILLED_BY_ANOTHER_USER" %}

#### E\_LIC\_ALREADY\_FULFILLED\_BY\_ANOTHER\_USER

<div class="warningtip"><p>Si vous possédez une liseuse TEA, nous vous conseillons de télécharger vos ebooks directement depuis votre liseuse, depuis l'espace Mes Achats.</p></div>

Cette erreur indique que le livre a déjà été ouvert avec un identifiant Adobe différent ou bien sans identifiant sur Adobe Digital Editions.
Il faut donc vérifier avec que le livre n'a pas été précédemment ouvert avec un autre identifiant Adobe ou sans identifiant sur un ordinateur.

* Si vous vous êtes trompé d'identifiant, il faut enregistrer le bon identifiant dans votre support. Si ça ne fonctionne toujours pas, contactez le service client pour procéder à une réinitialisation du ou des livres concernés.
* Si vous avez ouvert votre livre avec Adobe Digital Editions sans identifiant Adobe, contactez le service client pour procéder à une réinitialisation du ou des livres concernés.

[Vérifier avec quel identifiant Adobe le support a été autorisé.](/faq-comptes/#authorized-identifiant-adobe)

{% include feedback-button.html question="E_LIC_ALREADY_FULFILLED_BY_ANOTHER_USER" %}

