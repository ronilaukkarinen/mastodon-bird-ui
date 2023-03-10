## Mastodon with modern birdsite-like UI

[![Build Status for CSS](https://github.com/ronilaukkarinen/mastodon-bird-ui/actions/workflows/styles.yml/badge.svg)](https://github.com/ronilaukkarinen/mastodon-bird-ui/actions/workflows/styles.yml)

Blasphemy! Yes, I know, but I just had to do this. I wanted to see if it's possible to get <a href="https://github.com/mastodon/mastodon">Mastodon</a> default user interface to resemble Twitter, but be a lot better than it ever was.

**Please note** that this started as a personal experiment _for fun_, but then got more serious.

**See my [original Mastodon post](https://mementomori.social/@rolle/109984108360395822).<br>
Read the blog post: [The day I decided to build my own "Twitter"](https://rolle.design/the-day-i-decided-to-build-my-own-twitter).**

## Why would anyone want Mastodon to look like Twitter?

Because you can? Let's face it, we're kinda used to it, Mastodon already resembles the birdsite. Twitter UI is not bad, it's just that it's not for everyone. Twitter (in my opinion) made some bad choices with the new UI for example with the typography, so in a sense I wanted to see if I could make Mastodon look **like Twitter, but better**.

This is why I have defaulted Mastodon deep purple colors in this "theme", if you will. If you really want the vanilla birdsite-look, please modify the colors yourself. Or go to the hellsite if you really love it so much.

## [Live demo on mementomori.social](https://mementomori.social)

_Mobile:_

![mobile-2](https://user-images.githubusercontent.com/1534150/224368120-5f7bddc9-1702-4279-b297-35a4829e8a3b.png)

_Mastodon colors:_

![mementomori social_home (2)](https://user-images.githubusercontent.com/1534150/224481675-fa165053-30a4-4530-a2f4-ecc4ea08af4c.png)

_Twitter colors (outdated screenshot since I just wanted to try it first):_

![mementomori social_notifications (3)](https://user-images.githubusercontent.com/1534150/223725571-b7f8ef41-212c-476c-9006-4e7cb2ddc062.png)

### Features

As this is CSS-only, they are not really "features" but more like aesthetic changes.

- Missing alt text indicators (faded with "Alt text missing" text in the center)
- Subtle deep purple ribbon in the right corner for private messages
- CSS variables for everything
- Threaded replies
- Avatars on the left in feed view
- Unified transparent backgrounds
- Dark patterns for dropdowns and other pop overs like emoji picker
- Tinted deep purple, subtle beautiness
- Action bar in the bottom on mobile
- Birdsite-like like animation in the heart icon
- Circling boost animation

## Installation for Mastodon instance admins

1. Make sure _Mastodon (Dark)_ is enabled in the **Site theme** setting
2. Copy the contents of style.css
3. Install it as CSS to your assets or use Custom CSS in the Appearance settings in your instance

### Twitter-like link previews

If you like bigger link previews, please implement [this](https://github.com/mastodon/mastodon/issues/21874#issuecomment-1332556018).

## Installation for regular users, contributing and testing

1. Install [live-css-editor](https://github.com/webextensions/live-css-editor) (or any other extension that allows you to inject CSS into web pages) or use [Unite for macOS](https://www.bzgapps.com/unite)
2. Get style.css from this repo
3. Open extension and paste the CSS into the editor
4. Click ????-icon so the styles will be remembered for the domain or if you want just to use it as needed, activate styles from the extension's popup

### Goals

- **CSS only.** This means some pseudos and modern CSS hacks. The intent is to have the code base as simple and extendable as possible. The styles should be easily modifiable. Ready-made code works when placed in _Custom CSS_ box in {yourinstance.social/admin/settings/appearance}
- **Single-column layout only.** This experiment is not meant for advanced layout.
