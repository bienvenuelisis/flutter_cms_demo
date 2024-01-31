# Flutter CMS Demo

Demo project that showcase how you can build your news mobile app from your blog in minimal time.

## Ambitions

At it's foundation, this project is based on the [Flutter News ToolKit](https://github.com/flutter/news_toolkit) made by the Collaboration between [Google News Initiative](https://newsinitiative.withgoogle.com/) and [VGV](https://verygood.ventures/blog/flutter-news-toolkit-an-advantage-for-publishers-powered-by-vgv).

It already come with features like :

* Flavors ;
* Mobile Ads ;
* Analytics ;
* Internationalization ;
* Authentication ;
* Subscription to newsletter ;
* Push notifications ;
* Dark theme ;
* Deep links ;
* In App purchases ;
* Permissions management ;
* Local storage ;
* Dependency injector ;
* State management ;
* [Full template UI](https://www.figma.com/file/zeVmZvoe3x5EU2YBE49vet/Flutter-News-Toolkit-(Community)?type=design&node-id=13-3139&mode=design&t=h73yFWhDqipnTncQ-0) ;

As this helps us prototype quickly the first version, our desire is to go a little further.

### State management

Our first ambition is not to be tied to a single state management solution. The app generator that powered this demo, was rewritten entirely with Riverpod; not because Flutter Bloc isn't efficient, but rather because we integrated junior developers into the development team quite quickly and from their base with Provider, it was easier for them to understand Riverpod.

We hope to create different versions of the app generator, which will support the most popular state management solutions to make everyone feel at home. If you want to helps us, support your preferred state management feel free to contact us.

### CMS Data Sources Providers

We want to provide a simple way to convert content from all content management systems into data for a mobile news application. The initial version of the app generator support Jekyll ([with some configurations](https://blog.theresilient.dev/jekyll-blog-to-flutter-news-application-part-1-introduction#heading-2-communication-between-the-application-and-the-website-via-jekyll-json-posts-api)) and WordPress ([with WordPress REST API](https://developer.wordpress.org/rest-api/reference/)). But we want to go further and support all majors CMS, and provide a way to convert your contents, even if it's stored in your database and only accessible via a API (Restful, ...).

### Start from no CMS Data Source Provider

Even if this tool was first designed as a converter from an existing content site to an application, nothing prevents you from reversing the process. Get your news and content app even without having a site. In this scenario, an administration application allowing the creation of contents which will be available in the application, will be made available to the user.

### Multiple UI templates

We want to offer the user the possibility of choosing from a variety of different templates, which they can personalize as they wish.

### No code Tools

We want also, when the first version of the generator will be stable to build a No Code Tools around it to allow even non-developers to prototype their mobile content application in just a few minutes.

### More solutions for monetization

The current version of Flutter News ToolKit only supports Google Mobile Ads. Even if we like Google products, we want to offer more alternatives and even completely personalized ones, to satisfy, for example, users who already have an advertising network on their site.

### Content creator tools

In the future, we want to provider additional ressources for content creators :

* Analytics and administration mobile / desktop applications, that helps manage your on boarding resources, contents, premiums articles, notifications, subscriptions, payments, users, settings, custom templates...
* Add support for custom specific medias (videos, musics, podcasts).

## Demo Roadmap

| Feature & Status   | Steps                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [x] CMS Source URL | [x] Jekyll (follow this[guide](https://blog.theresilient.dev/jekyll-blog-to-flutter-news-application-part-1-introduction#heading-2-communication-between-the-application-and-the-website-via-jekyll-json-posts-api)) |
|                    | [x] WordPress (ensure[WordPress REST API](https://developer.wordpress.org/rest-api/reference/) is activated and better with access no restricted to users - for authors informations)                               |
|                    | [ ] Activate / Deactivate site preload   |
|                    | [ ] URL & CMS Data Source Validation     |

## Engine Roadmap

| Feature & Status               | Steps                       |
| ------------------------------ | --------------------------- |
| [ ] State management           | [x] Riverpod                |
|                                | [x] Flutter Bloc            |
| [x] Local Storage              | [x] SharedPreferences       |
|                                | [x] SecureSharedPreferences |
| [ ] Theming                    | [x] Light Theme             |
| [ ]                            | [ ] Dark Theme              |
| [ ] Internationalization      | [x] English                 |
|                                | [ ] French                  |
| [ ] Mobile Ads                 |                             |
| [ ] Template UIs               |                             |
| [ ] Analytics                  |                             |
| [ ] Authentication             |                             |
| [ ] Subscription to newsletter |                             |
| [ ] Push notifications         |                             |
| [ ] Deep links                 |                             |
| [ ] In App purchases           |                             |
| [ ] Permissions management     |                             |

## Disclaimer

At this point, the application builder code source is closed. This is mainly because the project is not yet really mature and we are still bickering over architectural issues. If you would like to join us in this work, please feel free to contact us. This repo contains only a prototype compiled web version of our generator which allows you to play a little with the engine directly from a browser. It was possible thanks to the work of [aloisdeniel](https://github.com/aloisdeniel), on the [device_preview](https://github.com/aloisdeniel/flutter_device_preview) package.

But at this moment, this project will helps us inform person with interests in this project, our avancements.

So feel free to fill issue, who are questions or bugs about the application demo or feature requests, following our guidelines.

## Copyrights

Flutter is is a registered trademark by Google. We have no affiliation or agreement with Google. We are just developers in love with the framework ; _as Rémi says_, Dart make our heart Flutter.

Made with 💙 by [bienvenuelisis](https://kokou.theresilient.dev/) and [theresilientdevs](https://theresilient.dev/) from 🇹🇬 .
