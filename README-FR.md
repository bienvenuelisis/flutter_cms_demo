# Flutter CMS Demo

Projet de démonstration qui montre comment vous pouvez créer votre application mobile d'actualités à partir de votre blog en un minimum de temps.

## Objectifs

* Fournir aux développeurs un ensemble d'outils permettant de créer une application mobile d'actualités en un minimum de temps.
* Fournir un moyen de prévisualiser en quelques secondes à quoi ressemblerait un site d'actualités ou de contenu, dans sa version mobile native.
* Aide les créateurs de contenu et les blogueurs à prototyper facilement l'apparence et à intégrer les fonctionnalités de l'application mobile d'actualités, sans aucune connaissance de Flutter.

## Ambitions

À la base, ce projet est basé sur le [Flutter News ToolKit](https://github.com/flutter/news_toolkit) réalisé par la collaboration entre [Google News Initiative](https://newsinitiative.withgoogle.com/) et [VGV](https://verygood.ventures/blog/flutter-news-toolkit-an-advantage-for-publishers-powered-by-vgv).

Il est déjà doté de fonctionnalités telles que :

* Les saveurs ;
* Annonces mobiles ;
* Analyses ;
* Internationalisation ;
* Authentification ;
* Inscription à la newsletter ;
* Notifications push ;
* Thème sombre ;
* Liens profonds ;
* Achats intégrés ;
* Gestion des autorisations ;
* Stockage local ;
* Injecteur de dépendances ;
* Gestion de l'État ;
* [Interface utilisateur complète du modèle](https://www.figma.com/file/zeVmZvoe3x5EU2YBE49vet/Flutter-News-Toolkit-(Community)?type=design&node-id=13-3139&mode=design&t=h73yFWhDqipnTncQ-0) ;

Comme cela nous permet de prototyper rapidement la première version, notre envie est d'aller un peu plus loin.

### Gestion de l'État

Notre première ambition n’est pas de nous enfermer dans une seule solution de gestion étatique. Le générateur d'applications qui alimente cette démo a été entièrement réécrit avec Riverpod ; non pas parce que Flutter Bloc n'est pas efficace, mais plutôt parce que nous avons intégré assez rapidement des développeurs juniors dans l'équipe de développement et depuis leur base avec Provider, il leur était plus facile de comprendre Riverpod.

Nous espérons créer différentes versions du générateur d'applications, qui prendront en charge les solutions de gestion d'État les plus populaires pour que chacun se sente chez lui. Si vous souhaitez nous aider, soutenir votre gestion d'état préférée, n'hésitez pas à nous contacter.

### Fournisseurs de sources de données CMS

Nous souhaitons fournir un moyen simple de convertir le contenu de tous les systèmes de gestion de contenu en données pour une application d'actualités mobile. La version initiale du générateur d'applications prend en charge Jekyll ([avec quelques configurations](https://blog.theresilient.dev/jekyll-blog-to-flutter-news-application-part-1-introduction#heading-2-communication-entre-l'application-et-le-site-web-via-jekyll-json-posts-api)) WordPress ([avec l&#39;API REST WordPress](https://developer.wordpress.org/rest-api/reference/)) , Ghost (avec [Documentation de l&#39;API de contenu Ghost](https://ghost.org/docs/content-api/)) et Blogger. Mais nous souhaitons aller plus loin et supporter tous les CMS majeurs, et proposer un moyen de convertir vos contenus, même s'ils sont stockés dans votre base de données et accessibles uniquement via une API (Restful, ...).

#### Configuration des sources de données

Certaines sources de données nécessitent des configurations ou ressources supplémentaires pour pouvoir être prise en compte.

**Aucune information qui n'est pas déjà publique et ouverte à tous ne peut être récupéré nos convertisseurs de contenus.**

**Aucune des données d'authentification (et globalement aucune information) que vous fournissez n'est envoyé vers nos serveurs.  Ils peuvent être stockés localement ([avec un hachage par WebCrypto](https://pub.dev/packages/flutter_secure_storage#configure-web-version)), pour que vous accédiez au lancement au dernier site que vous avez configuré.**

* JEKYLL : les sites Jekyll n'offrent pas un point d'accès à toutes leurs ressources via une API Rest. Mais ce comportement peut être _fabriqué_. Plus de détails dans [cet article](https://blog.theresilient.dev/jekyll-blog-to-flutter-news-application-part-1-introduction#heading-2-communication-%20entre-l%27application-et-le-site-web-via-jekyll-json-posts-api).
* WORDPRESS : Par défaut, l'API Rest est activé avec les sites WordPress. Maintenant certaines informations comme l'accès aux auteurs (donc aux utilisateurs) peuvent être soumis à une étape de vérification. C'est pourquoi lors de la sélection de WordPress comme source de données vous êtes invités optionnellement à entrer les informations de connexion. Mais ce ne sont pas des informations à fournir obligatoirement.
* GHOST : L'intégration du content API de Ghost nécessite [une clé d&#39;API](https://ghost.org/docs/content-api/#key) qui doit être généré par le propriétaire du site. Comme expliqué dans la documentation, la clé d'API peut être utilisée en toute sécurité dans les navigateurs et autres environnements non sécurisés, car elles ne permettent d’accéder qu’aux données publiques. Cette option est disponible dans la section Intégrations de l'interface d'administration du site Ghost. Après avoir généré la clé, vous choisissez Ghost comme source de données et entrez la clé dans le champ réservé à cet effet.
* BLOGGER : aucune configuration nécessaire.

### Démarrer sans fournisseur de source de données CMS

Même si cet outil a d’abord été conçu comme un convertisseur d’un site de contenu existant vers une application, rien ne vous empêche d’inverser le processus. Obtenez votre application d'actualités et de contenu même sans site. Dans ce scénario, une application d'administration permettant la création de contenus qui seront disponibles dans l'application, sera mise à disposition de l'utilisateur.

### Plusieurs modèles d'interface utilisateur

Nous souhaitons offrir à l'utilisateur la possibilité de choisir parmi une variété de modèles différents, qu'il peut personnaliser à sa guise.

### Outils sans code

Nous souhaitons également, lorsque la première version du générateur sera stable, construire un No Code Tools autour de celui-ci pour permettre même aux non-développeurs de prototyper leur application de contenu mobile en quelques minutes seulement.

### Plus de solutions pour la monétisation

La version actuelle de Flutter News ToolKit ne prend en charge que Google Mobile Ads. Même si nous aimons les produits Google, nous souhaitons proposer plus d'alternatives et même des alternatives totalement personnalisées, pour satisfaire par exemple les utilisateurs qui disposent déjà d'une régie publicitaire sur leur site.

### Outils de création de contenu

À l'avenir, nous souhaitons fournir des ressources supplémentaires aux créateurs de contenu :

* Applications mobiles/de bureau d'analyse et d'administration, qui vous aident à gérer vos ressources d'intégration, vos contenus, vos articles premium, vos notifications, vos abonnements, vos paiements, vos utilisateurs, vos paramètres, vos modèles personnalisés...
* Ajoutez la prise en charge de médias spécifiques personnalisés (vidéos, musiques, podcasts).

## Feuille de route

Suivez l'évolution de la version démo avec [le tableau de bord des tâches](https://github.com/bienvenuelisis/flutter_cms_demo/issues).

## Clause de non-responsabilité

À ce stade, la source du code du générateur d’applications est fermée. Cela s'explique principalement par le fait que le projet n'est pas encore vraiment mature et que nous nous chamaillons encore sur des questions architecturales. Si vous souhaitez nous rejoindre dans ce travail, n'hésitez pas à nous contacter. Ce repo contient uniquement un prototype de version web compilé de notre générateur qui vous permet de jouer un peu avec le moteur directement depuis un navigateur. Cela a été possible grâce au travail de [aloisdeniel](https://github.com/aloisdeniel), sur le package [device_preview](https://github.com/aloisdeniel/flutter_device_preview).

Mais en ce moment, ce projet va nous aider à informer les personnes intéressées par ce projet, de nos avancements.

N'hésitez donc pas à répondre aux questions, aux questions ou aux bugs concernant la démo de l'application ou les demandes de fonctionnalités, en suivant nos directives.

## Droits d'auteur

Flutter est une marque déposée de Google. Nous n'avons aucune affiliation ou accord avec Google. Nous sommes juste des développeurs amoureux du framework ; _comme le dit Rémi_, Dart fait battre notre cœur.

Réalisé avec 💙 par [bienvenuelisis](https://kokou.theresilient.dev/) et [theresilientdevs](https://theresilient.dev/) de 🇹🇬 .
