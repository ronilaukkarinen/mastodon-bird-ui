## Mastodon with modern birdsite-like UI

[![Build Status for CSS](https://github.com/ronilaukkarinen/mastodon-bird-ui/actions/workflows/styles.yml/badge.svg)](https://github.com/ronilaukkarinen/mastodon-bird-ui/actions/workflows/styles.yml) [![Supported Mastodon version](https://img.shields.io/badge/mastodon-v4.1.2-595aff)](https://github.com/mastodon/mastodon)

Blasphemy! Yes, I know, but I just had to do this. I wanted to see if it's possible to get <a href="https://github.com/mastodon/mastodon">Mastodon</a> default user interface to resemble Twitter, but be a lot better than it ever was.

**Please note** that this started as a personal experiment _for fun_, but then got more serious.

**See my [original Mastodon post](https://mementomori.social/@rolle/109984108360395822).<br>
Read the blog post: [The day I decided to build my own "Twitter"](https://rolle.design/the-day-i-decided-to-build-my-own-twitter).**

## Versions

- [Mastodon 4.1.2 stable](https://github.com/ronilaukkarinen/mastodon-bird-ui/tree/mastodon-4.1.2-stable)
- [Mastodon 4.1.2 nightly (main branch)](https://github.com/ronilaukkarinen/mastodon-bird-ui/tree/mastodon-4.1.2-nightly)

## Table of contents

1. [Why would anyone want Mastodon to look like Twitter?](#why-would-anyone-want-mastodon-to-look-like-twitter)
2. [Features](#features)
3. [Installation for Mastodon instance admins](#installation-for-mastodon-instance-admins)
4. [Make Mastodon Bird UI as optional by integrating it as 'Site theme' in settings for all users](#make-mastodon-bird-ui-as-optional-by-integrating-it-as-site-theme-in-settings-for-all-users)
5. [Installation for regular users, contributing and testing](#installation-for-regular-users-contributing-and-testing)
6. [Updating instructions](#updating-instructions)
8. [Other tweaks and customizations](#other-tweaks-and-customizations)
    1. [Twitter-like link previews](#twitter-like-link-previews)
    2. [Status bar color on Android PWA](#status-bar-color-on-android-pwa)
    3. [Hide translate link for multiple languages](#hide-translate-link-for-multiple-languages)
    4. [Thread lines](#thread-lines)
    5. [Micro-interactions](#micro-interactions)
9. [FAQ](#faq)
    1. [I want to make changes to the UI, can I do that?](#i-want-to-make-changes-to-the-ui-can-i-do-that)
    2. [Can you implement feature X?](#can-you-implement-feature-x)
    3. [I want background-color to the compose form](#i-want-background-color-to-the-compose-form)
    4. [Why don't you just create an app?](#why-dont-you-just-create-an-app)
    5. [Why don't you just run Mastodon Bird UI in a separate URL?](#why-dont-you-just-run-mastodon-bird-ui-in-a-separate-url)
    6. [Is the advanced web interface styled](#is-the-advanced-web-interface-styled)
    7. [Why the admin interface is not styled?](#why-the-admin-interface-is-not-styled)
    8. [Can you add background-color for compose form box area?](#can-you-add-background-color-for-compose-form-box-area)
    9. [Can you change compose form height and font-size?](#can-you-change-compose-form-height-and-font-size)
    10. [Can you add this/that feature as default?](#can-you-add-feature-x-as-default)
    11. [Can you make it look like this by default?)?](#can-you-make-it-look-like-this-by-default)
10. [Goals](#goals)
11. [Accessibility](#accessibility)

## Why would anyone want Mastodon to look like Twitter?

Because you can? Let's face it, we're kinda used to it, Mastodon already resembles the birdsite. Twitter UI is not bad, it's just that it's not for everyone. Twitter (in my opinion) made some bad choices with the new UI for example with the typography, so in a sense I wanted to see if I could make Mastodon look **like Twitter, but better**.

This is why I have defaulted Mastodon deep purple colors in this "theme", if you will. If you really want the vanilla birdsite-look, please modify the colors yourself. Or go to the hellsite if you really love it so much.

## [Live demo on mementomori.social](https://mementomori.social)

![224368120-5f7bddc9-1702-4279-b297-35a4829e8a3b](https://user-images.githubusercontent.com/1534150/227730434-8a649484-d46c-4b5a-8137-930a302e54d8.png)

Here are some of the UI things Mastodon Bird UI is trying to solve (read [the Mastodon post](https://mementomori.social/@rolle/110139191307581764)):

[![image](https://user-images.githubusercontent.com/1534150/233774924-4506cf63-06f2-49e1-9c66-00f145a854b4.png)](https://mementomori.social/@rolle/110139191307581764)

### More screenshots

- [Dark version on mobile](https://user-images.githubusercontent.com/1534150/225091661-004080da-58c6-4f66-8d1a-9510cf656980.png)
- [Light version on mobile](https://user-images.githubusercontent.com/1534150/227730439-f4408917-f92f-4424-a3c6-35169af967bd.jpg)
- [Dark version on Linux desktop](https://user-images.githubusercontent.com/1534150/224481675-fa165053-30a4-4530-a2f4-ecc4ea08af4c.png)
- [Dark version of the profile on Linux desktop](https://user-images.githubusercontent.com/1534150/225982793-89843f18-e2e5-46bc-b265-138f8ed460ca.png)
- [Light version on Linux desktop](https://user-images.githubusercontent.com/1534150/227730450-c1b82e2c-8ab3-4474-84fc-b9d3422cdc8d.png)
- [Dark profile on macOS desktop](https://user-images.githubusercontent.com/1534150/234549643-3551cb2c-34c8-43bd-be27-3a9932f6be1d.png)
- [Light version on macOS desktop](https://user-images.githubusercontent.com/1534150/234549763-dc1f5216-a4bb-4577-b27e-7d84d1b6a82d.png)
- [Twitter colors on desktop (outdated)](https://user-images.githubusercontent.com/1534150/223725571-b7f8ef41-212c-476c-9006-4e7cb2ddc062.png)
- [Advanced web interface with multiple columns](https://github-production-user-asset-6210df.s3.amazonaws.com/1534150/238149036-aba154be-dd2c-43b0-9e41-aaea54908eb8.png)

## Features

As this is CSS-only, they are not really "features" but more like aesthetic changes.

- Respects the profile **Site theme** setting and sets dark/light based on this alone
- Missing alt text indicators
- Subtle deep purple ribbon in the right corner for private messages
- CSS variables for everything
- Threaded replies (limited, see issue [#4](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues/4#issuecomment-1493274306))
- Avatars on the left in feed view
- Unified transparent backgrounds
- Dark patterns for dropdowns and other pop overs like emoji picker
- Tinted deep purple, subtle beautiness
- Action bar in the bottom on mobile
- Micro-interaction in the like/favourite icon (see more about [this](#micro-interactions))
- Circling boost animation
- Support for RTL languages
- Hide lists by default, show them on hover
- Carefully polished UI with hand picked/designed icons based on open source versions of Iconoir, Ionicons and Feather

## Installation for Mastodon instance admins

1. Copy the contents of [layout-single-column.css](https://github.com/ronilaukkarinen/mastodon-bird-ui/blob/master/layout-single-column.css) and [layout-multiple-columns.css](https://github.com/ronilaukkarinen/mastodon-bird-ui/blob/master/layout-multiple-columns.css) and paste them (or one of them) to the **Custom CSS** in the Appearance settings in your instance (https://_yourinstance_/admin/settings/appearance). It might be recommended using the single layout CSS as "base" and use the advanced view CSS with browser extension (as it's desktop only anyway).

![Screen-Shot-2023-03-31-13-25-52](https://user-images.githubusercontent.com/1534150/229111630-c8975708-134b-4887-b259-a87857193387.png)

## Make Mastodon Bird UI as optional by integrating it as 'Site theme' in settings for all users

Mastodon Bird UI can be integrated as a **Site theme** for all instance users as optional.

![image](https://github.com/ronilaukkarinen/mastodon-bird-ui/assets/1534150/da9f873d-8c0a-430c-8172-cc8f304c51ec)

If you'd like a different branding for your instance like "Elephant" without any [mention of birds](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues/30), use [Bird UI Theme Admins](https://github.com/mstdn/Bird-UI-Theme-Admins) by [@stux](https://mstdn.social/@stux). Otherwise read along.

If you cd to your Mastodon directory (usually $HOME/live) you can run these bash commands (**Please note:** These add Mastodon Bird UI as name "Mastodon Bird UI (Dark)" + variants as default, while retaining the original themes as secondary themes):

```bash
# First, define version
export MASTODON_VERSION_FOR_BIRD_UI="mastodon-4.1.2-nightly"

# Create a new folder for the theme
mkdir -p app/javascript/styles/mastodon-bird-ui

# Download the CSS file for single column layout
wget https://raw.githubusercontent.com/ronilaukkarinen/mastodon-bird-ui/$MASTODON_VERSION_FOR_BIRD_UI/layout-single-column.css -O app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Download the CSS file for multiple column layout
wget https://raw.githubusercontent.com/ronilaukkarinen/mastodon-bird-ui/$MASTODON_VERSION_FOR_BIRD_UI/layout-multiple-columns.css -O app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss

# Replace theme-contrast with theme-mastodon-bird-ui-contrast for single column layout
sed -i 's/theme-contrast/theme-mastodon-bird-ui-contrast/g' app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Replace theme-mastodon-light with theme-mastodon-bird-ui-light for single column layout
sed -i 's/theme-mastodon-light/theme-mastodon-bird-ui-light/g' app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Replace theme-contrast with theme-mastodon-bird-ui-contrast for multiple column layout
sed -i 's/theme-contrast/theme-mastodon-bird-ui-contrast/g' app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss

# Replace theme-mastodon-light with theme-mastodon-bird-ui-light for multiple column layout
sed -i 's/theme-mastodon-light/theme-mastodon-bird-ui-light/g' app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss

# Create high contrast theme file
echo -e "@import 'contrast/variables';\n@import 'application';\n@import 'contrast/diff';\n@import 'mastodon-bird-ui/layout-single-column.scss';\n@import 'mastodon-bird-ui/layout-multiple-columns.scss';" > app/javascript/styles/mastodon-bird-ui-contrast.scss

# Create light theme file
echo -e "@import 'mastodon-light/variables';\n@import 'application';\n@import 'mastodon-light/diff';\n@import 'mastodon-bird-ui/layout-single-column.scss';\n@import 'mastodon-bird-ui/layout-multiple-columns.scss';" > app/javascript/styles/mastodon-bird-ui-light.scss

# Create dark theme file
echo -e "@import 'application';\n@import 'mastodon-bird-ui/layout-single-column.scss';\n@import 'mastodon-bird-ui/layout-multiple-columns.scss';" > app/javascript/styles/mastodon-bird-ui-dark.scss

# Overwrite mastodon/config/themes.yml with new settings, Mastodon Bird UI dark as default
echo -e "default: styles/mastodon-bird-ui-dark.scss\nmastodon-bird-ui-light: styles/mastodon-bird-ui-light.scss\nmastodon-bird-ui-contrast: styles/mastodon-bird-ui-contrast.scss\nmastodon-dark: styles/application.scss\nmastodon-light: styles/mastodon-light.scss\ncontrast: styles/contrast.scss" > config/themes.yml
```

After this you need to edit localisations in `config/locales/en.yml` (`nano config/locales/en.yml`) and add these lines:

```yml
  themes:
     contrast: Mastodon (High contrast)
     default: Mastodon Bird UI (Dark)
     mastodon-bird-ui-light: Mastodon Bird UI (Light)
     mastodon-bird-ui-contrast: Mastodon Bird UI (High contrast)
     mastodon-light: Mastodon (Light)
     mastodon-dark: Mastodon (Dark)
```

Same for the localizations of your choice, for example `config/locales/fi.yml` (`nano config/locales/fi.yml`):


```yml
  themes:
     contrast: Mastodon (Korkea kontrasti)
     default: Mastodon Bird UI (Tumma)
     mastodon-bird-ui-light: Mastodon Bird UI (Vaalea)
     mastodon-bird-ui-contrast: Mastodon Bird UI (Korkea kontrasti)
     mastodon-light: Mastodon (Vaalea)
     mastodon-dark: Mastodon (Tumma)
```

And you're done!

## Installation for regular users, contributing and testing

1. Install [Live CSS Editor](https://github.com/webextensions/live-css-editor) (or any other extension like [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en) that allows you to inject CSS into web pages) or use [Unite for macOS](https://www.bzgapps.com/unite) or use the [user.js by eg](https://ieji.de/@eg/110174544387143309)
2. Copy the contents of [layout-single-column.css](https://github.com/ronilaukkarinen/mastodon-bird-ui/blob/master/layout-single-column.css) and [layout-multiple-columns.css](https://github.com/ronilaukkarinen/mastodon-bird-ui/blob/master/layout-multiple-columns.css)
3. Open extension and paste the contents of both CSS files into the editor
4. If you use Live CSS Editor, click 📌-icon so the styles will be remembered for the domain or if you want just to use it as needed, activate styles from the extension's popup

## Updating instructions

If you are using **Custom CSS**, just copy and paste the new version to **Custom CSS** textarea in the Appearance settings in your instance (https://_yourinstance_/admin/settings/appearance). If you are using Mastodon Bird UI as option, get the latest changes to your instance, first cding to live folder (or to wherever your Mastodon root is), then:

```bash
# First, define version
export MASTODON_VERSION_FOR_BIRD_UI="mastodon-4.1.2-nightly"

# Download the CSS file for single column layout
wget --no-cache https://raw.githubusercontent.com/ronilaukkarinen/mastodon-bird-ui/$MASTODON_VERSION_FOR_BIRD_UI/layout-single-column.css -O app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Download the CSS file for multiple column layout
wget --no-cache https://raw.githubusercontent.com/ronilaukkarinen/mastodon-bird-ui/$MASTODON_VERSION_FOR_BIRD_UI/layout-multiple-columns.css -O app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss

# Replace theme-contrast with theme-mastodon-bird-ui-contrast for single column layout
sed -i 's/theme-contrast/theme-mastodon-bird-ui-contrast/g' app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Replace theme-mastodon-light with theme-mastodon-bird-ui-light for single column layout
sed -i 's/theme-mastodon-light/theme-mastodon-bird-ui-light/g' app/javascript/styles/mastodon-bird-ui/layout-single-column.scss

# Replace theme-contrast with theme-mastodon-bird-ui-contrast for multiple column layout
sed -i 's/theme-contrast/theme-mastodon-bird-ui-contrast/g' app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss

# Replace theme-mastodon-light with theme-mastodon-bird-ui-light for multiple column layout
sed -i 's/theme-mastodon-light/theme-mastodon-bird-ui-light/g' app/javascript/styles/mastodon-bird-ui/layout-multiple-columns.scss
```

After this commit changes to your Mastodon fork if you have one, then:

```
RAILS_ENV=production bundle exec rails assets:precompile
sudo service mastodon-web reload
```

That's it!

## Other tweaks and customizations

While Mastodon Bird UI works perfectly fine out of the box, there are some things you might want to modify to make it look even better.

### Twitter-like link previews

If you like bigger link previews, please implement [this](https://github.com/mastodon/mastodon/issues/21874#issuecomment-1332556018).

### Status bar color on Android PWA

Edit [this line](https://github.com/mastodon/mastodon/blob/f4f3e2b46e619fcc2eda48c2eb66c517b4f466aa/app/views/layouts/application.html.haml#L24) and recompile assets with `yarn build:production`.

### Hide translate link for multiple languages

If you're a polyglot like me, you can hide the translate link on other languages than default by adding this at the end of the **Custom CSS** (this example is for people who understand Finnish and German):

```css
.status__content__text[lang="de"].translate ~ .status__content__read-more-button,
.status__content__text[lang="fi"].translate ~ .status__content__read-more-button {
  display: none;
}
```

### Thread lines

There is currently no proper thread support in replies on Mastodon core. There's an [issue](https://github.com/mastodon/mastodon/issues/19570#issuecomment-1493057424) about it that I have commented. You should also see the discussion on issue [#4](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues/4#issuecomment-1493274306).

1. Implement [this](https://github.com/mastodon/mastodon/compare/main...ronilaukkarinen:mastodon:feat-thread-lines). Tested and online at [mementomori.social](https://mementomori.social). This changes the HTML structure so that creating threaded lines is possible.
2. Enable Mastodon Bird UI 1.3.8 or later
3. It works!

### Micro-interactions

There are two micro-interaction animations in this UI, both are inspired by the Twitter's original UI animation. The star is originally a work of 
a Twitter designer [Brian Waddington](https://dribbble.com/shots/1884504-Twitter-Fav). The heart is by Twitter design team. Both animations have been completely re-created by me, frame by frame. The star animation itself contains 100 hand made frames.

| Twitter likes | Twitter fave star (2015) |
| ------------- | ------------- |
| <img src="https://user-images.githubusercontent.com/1534150/230135110-6391e061-10c9-4819-af8b-7144b31dac93.gif" width="200" alt="heart" /> | ![star](https://user-images.githubusercontent.com/1534150/230135096-4d1ac9b2-290b-41da-a136-985e908868fa.gif) |

If you like the heart, just remove everything between `Star animation micro-interactions start (depends on the heart icon above)` and `Star animation micro-interactions end`.

## FAQ

I get many questions about this UI, so here I'm going to answer to them.

### I want to make changes to the UI, can I do that?

Of course! This is all open source, customizable and extendable. You can fork this repo and make changes to the CSS. You can also use the **Custom CSS** box in {yourinstance.social/admin/settings/appearance} to add your own styles directly.

### Can you implement feature X?

Not everything is possible via CSS only. In fact, some of the tweaks I had to do to the Mastodon core, see my fork [here](https://github.com/mastodon/mastodon/compare/v4.1.2...ronilaukkarinen:mastodon:mementomori-social-mods) and the tweaks above.

However, even if they were possible, I won't implement all requests. My opinionated choices are not the only answer, but I'm not willing to add every possible customization to this UI as default. I want to keep it simple and extendable.

### I want background-color to the compose form

See the end of [this comment](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues/10#issuecomment-1499345796).

### Why don't you just create an app?

I'm not a software developer. I'm a front end developer (and a bit of a designer) and my expertise is in CSS, UX and HTML. I don't know how to create a Mastodon app for Android, iOS or web and while I know a bit of python, JavaScript, Ruby and other programming languages, I don't have time and patience to create an app from scratch right now.

There are other people who are working on magnificent apps for Mastodon, so I'm not going to reinvent the wheel. I simply like the Twitter-ish UI and Mastodon default web back-end and I want to have these combined on my instance. As CSS is the language I live and breathe daily, it's really easy and fast for me to create a UI like this.

Also, Mastodon web UI works as an app already. See my answer [here](https://mementomori.social/@rolle/110242274361461278).

### Why don't you just run Mastodon Bird UI in a separate URL?

See the previous answer. Mastodon Bird UI is not an app, it's a CSS file that you can use with any Mastodon instance. You don't need to run a separate instance just for this UI and perhaps you shouldn't either.

If you really would want this to run in a separate URL, you could in theory set up another nginx host for a subdomain and just use [ngx_http_sub_module](http://nginx.org/en/docs/http/ngx_http_sub_module.html) to load up a CSS file. I haven't tried this and it might not be even possible, but it's worth a try.

### Is the advanced web interface styled?

Yes! From version 1.5.4 multiple columns are supported. Apply layout-multiple-columns.css to your Custom CSS or style extension to enable.

### Why the admin interface is not styled?

We don't spend much time in the admin interface and it's not a priority for me to style it. It would mean too much work and it's not worth it right now.

### Can you add background-color for compose form box area?

Aesthetically I prefer left and right sides to be "floaty" and I follow the design language from Twitter even if the compose form is there inside the center column. See [this issue](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues/10) for the decision not to have it there by default.

You can add it yourself by adding this to your Custom CSS:

```css
/* Add background color for the compose form */
/* stylelint-disable-next-line no-duplicate-selectors */
.layout-single-column .compose-form .compose-form__autosuggest-wrapper,
.layout-single-column .compose-form .compose-form__buttons-wrapper {
  background-color: var(--color-mud);
  border-color: var(--color-mud);
  padding-top: 0;
}

/* Fixes to bottom row when there's a background */
.layout-single-column .compose-form .compose-form__buttons-wrapper {
  padding-bottom: calc(var(--gap-default) / 2);
}
```

### Can you change compose form height and font-size?

Yes YOU can. But they're not there by default, see [this post](https://mementomori.social/@rolle/110657416001531854). Box size has been set to a certain max-height because it helps the people who use assistive on-screen keyboard (suggestion from [@rmattila74](https://energydon.fi/@rmattila74)). For this reason I'm not going to increase height or make it resize too much by default. You can do these modifications for yourself, here's the code for you:

```css
.layout-single-column .compose-form .autosuggest-textarea__textarea {
  font-size: 18px;
  min-height: 300px;
}
```

Tweak the values as you like.

### Can you add this/that feature as default?

Mastodon Bird UI is CSS only, so I can't add any features. Please send your Mastodon feature ideas [here](https://github.com/mastodon/mastodon/issues).

### Can you make it look like _this_ by default?

Probably yes, but I'm not here to please everyone. Suggestions like [this](https://mementomori.social/@rolle/110658189531503982) are very important and there has been many pull requests and issues already that have helped me to make the UI better. While saying this I'm not going to implement every single suggestion, because there are too many different opinions out there.

If you like, you can always suggest something or create a pull request. You are welcome to create your own fork and modify the UI as you prefer. I hope you have fun with it!

## Goals

- **CSS only.** This means some pseudos and modern CSS hacks. The intent is to have the code base as simple and extendable as possible. The styles should be easily modifiable. Ready-made code works when placed in **Custom CSS** box in {yourinstance.social/admin/settings/appearance}
- **Dependency free.** No JavaScript, no build process, no nothing. Just plain CSS. Linting is optional and just here to make sure the code quality is good.

## Accessibility

Mastodon Bird UI is built accessibility in mind. Please note that many "features" are 100% the same than in the original Mastodon, because this is not a separate app but merely consists of modifications in styles. There is a High contrast version available just like in the original Mastodon.

![image](https://github.com/ronilaukkarinen/mastodon-bird-ui/assets/1534150/030e7243-5a9d-44ea-8284-4be745b13b83)

Programmatically everything is as accessible as Mastodon, color-wise "Pretty good" (WCAG A-AA). Please open [an issue](https://github.com/ronilaukkarinen/mastodon-bird-ui/issues) or a [Mastodon issue](https://github.com/mastodon/mastodon/issues), if you have accessibility concerns. Thank you.
