### 1.2.1rc10: 2023-03-15

* Consistent position for no alt tag with other media tags
* Hide footer buttons in modals
* Fix some situations where too high number can cause icon to shrink
* Add compose history modal header to border color scope
* Fix tertiary button border on hover
* Fix styles for admin report notifications (thanks [@koyu](https://koyu.space/@koyu))
* Fix notification-update alignment (thanks [@koyu](https://koyu.space/@koyu))
* Fix dropdown menu history item styles

### 1.2.0: 2023-03-15

* Consistency in follow/unfollow button hover and focus colors
* More distinct :focus-within to text inputs
* Hilight search icon when searching emojis
* Fix emoji-mart search icon color
* Add more consistent colors for emoji-mart
* Fix columns for RTL (thanks [@ButterflyOfFire](https://mstdn.fr/@ButterflyOfFire))
* Fix default relationship follow button color
* Improve relationship follow focus action on mobile
* Fix missing audio player alignment
* Fix audio player border-radius
* Use CSS Selectors Level 4 Working Draft :has for missing alt tag media instead of opacity

### 1.1.9: 2023-03-13

* Fix blur overlay on iPad
* Fix compose form z-index on mobile
* Add green/red indicator in the follow/unfollow button in notifications
* Add missing stylelint-order package
* Fix iOS Safari issue #1

### 1.1.8: 2023-03-12

* Remove width hack for mobile
* Add unit tests
* Remove SCSS related rules
* Fix broken Safari build
* Fix mobile scrollability issues in general
* Fixes for iPad
* Fixes for Android Chrome
* Fixes for logged out mobile view
* Order three dots last on mobile
* Fix list-editor inline button dimensions
* Fix disabled action buttons pointer-events and style
* Make autosuggest-textarea__suggestions dark
* Remove autosuggest-textarea__suggestions extra box-shadow
* Fix audio-player width on regular feed
* Improve blurred ui header on mobile and iPad
* Better Mastodon (Light) support
* Added more elements to the color scopes
* Add border radius to media
* Mark media with alt text missing with text "Alt text missing"
* Add embed input background color
* Add hover transition for article-items

### 1.1.7: 2023-03-11

* Fix detailed status bar icon bubble alignment on Windows
* Add character-counter to the dim color scope
* Fix focusable toot color
* Fix theme when Mastodon (Light) Site theme is enabled
* Add more elements to var scopes

### 1.1.6: 2023-03-11

* Add consistent notification filter bar icons
* Add text icons to dim color scope
* Add composer button border-radius
* Fix active boost animation
* Simplify the hover and focus shade

### 1.1.5: 2023-03-11

* Improve trends heading
* Fix account relationship hover background bubble
* Order column-links on mobile: Home, Explore, notifications, lists

### 1.1.4: 2023-03-10

* Fix border color tint towards the Mastodon brand color
* Fix some cases where threaded line is cutting short
* Order icons in mobile based by most used first
* Make the column link 1/4 of width of the screen on mobile
* Fix account relationship icon color

### 1.1.3: 2023-03-10

* Fix status action bar button hover bubble alignment
* Fix heart animation position on mobile
* Fix avatar size on certain situations
* Fix dim hex in SVG icons
* Fix wrong variable in avatars
* Fix threaded line position on first post
* Fix shade in the bio of "For you" user accounts
* Improve follow user icon in notifications
* Use brand color in notification icons
* Add list-adder modal styles
* Add icons from open source versions of Iconoir, Ionicons and Feather
* Make icons consistent across views
* Color privacy dropdown

### 1.1.2: 2023-03-09

* Fix the heart animation on the icons with counter
* Fix notification title overlapping with polls
* Fix avatar space alignment with long usernames
* Reset padding from attachment-list on reply indicator
* Fix boost animation
* Fix detailed status button bubbles
* Fix gap between list-adder list item and icon

### 1.1.1: 2023-03-09 

* Fix always spinning boost button
* Improve alignment of the bottom items on mobile
* Fix empty-column-indicator on mobile
* Add more dim colors to variable scope
* Add focused text color to inputs
* Add list adder modal styles
* Fix heart animation in profile feed
* Fix incorrect preview card title color
* Fix list item width on mobile

### 1.1.0: 2023-03-09

* Add .account to color-border section
* Fix hover on account type of notifications
* Fix top margin on mobile
* Fix hover bubble dimension under actions
* Fix action buttons alignment on mobile
* Disable action focus bubble on mobile
* Fix retweet focus color on mobile

### 1.0.9: 2023-03-09

* Fix hover colors on boost and star buttons
* Fix 1px jump on activating the spark animation
* Fix horizontal 1px jump on animation
* Fix retweet button animating on each load
* Fix unread notification background color on hover

### 1.0.8: 2023-03-09

* Replicate animated heart with sparkles
* Add retweet icon animation

### 1.0.7: 2023-03-09

* Fix Publish button not reachable on mobile if file is attached to the post
* Fix column-link background sticking too long
* Fix active retweet counter color
* Make default buttons round

### 1.0.6: 2023-03-09

* Fix video-player alignment
* Improve mobile bottom bar spacing
* Lists view styles

### 1.0.5: 2023-03-09

* Improve unread notification style to be more subtle without left border
* Add accent color to home icon in notifications
* Fix wrapping issues of the notification title
* Add more space between trends
* Remove side bar scrolling bar while retaining scrollability
* Hack to display notification message title on one line
* Fix direct message indicator on detailed status
* Poll color improvements
* Fix profile suggestion styles
* More consistent icon sizes for mobile bar

### 1.0.4: 2023-03-09

* Change server stats label to lowercase and dim
* Increase notification home icon size
* Make counter a bit closer to the icon
* Fix explore__search-header background on mobile
* Fix general avatars
* Fix line-height on buttons
* Visual indicator about direct messages [#22158](https://github.com/mastodon/mastodon/issues/22158#issuecomment-1353661031)
* Default to full-width images in link previews [#21874](https://github.com/mastodon/mastodon/issues/21874#issuecomment-1332556018)
* Better, more subtle private message ribbon on the right corner

### 1.0.3: 2023-03-08

* Change button secondary color dimmer
* Fix dim account name
* Slightly less padding after status-prepend
* Fix icon size leaking to link svg
* Mobile: Fix horizontal scrollbars
* Replace icons for detailed view

### 1.0.2: 2023-03-08

* Fix like icon and boost icon on detailed post
* Fix like icon hover when already active
* Add `--color-brand-mastodon-threaded-line`
* Fix badge border color
* Fix mobile icon size consistency
* Add heart to column-link icon
* Fix secondary button
* Fix polls
* Fix search icon
* Fix follow hashtag button not visible
* Fix account relationship icon size

### 1.0.1: 2023-03-08

* Add `--color-accent-dark`
* Make badge background color more vivid
* Fix overlapping follow notification display name
* More subtle box-shadow for dropdown-menu
* Fix profile icon button styles
* Fix subscribe button styles

### 1.0.0: 2023-03-08

* First stable release