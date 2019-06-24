# jonnowitts.com Version 2018
The time has come again for a fresh new design and code build-out of jonnowitts.com. This time I'll be using Git along the way to document the progress as I go. I think this is probably version 3 or 4, although not all versions of my site have made it to the web so in reality this is probably version 6.

## Summer 2019 update
I've carried out an audit and refactor of the CSS. The code was beginning to get unwieldy due to the way I had split out the sections and responsive aspects. Each responsive size had it's own Sass file and these got compiled together. To begin with this seemed to work, but over time the file names began to make less sense (particularly when returning to the code base after a few months). The refactor has put all the content page code together and stripped page specific styles back so nearly all content page styling is agnostic. The code is a lot easier to maintain as the bulk of it is kept in one file (content.scss). Responsive sizes are defined at the top of the file and then referenced using @import in order to keep all styles together and reduce the headache of multiple break points.

```// Media query sizes
$breakpoints:(
	sm: 576px, // Landscape mobiles
	md: 768px, // Tablets
	lg: 992px, // Desktops
	xl: 1200px // Large desktops
);
```

To use a media query in the code:
``` .profile-pic {
    width: 100%;
    @import breakpointAbove(sm) {
        width: 50%;
    }
    @import breakpointAbove(lg) {
        width: 25%;
    }
}
```

The current roadmap is:
* v1 Flat HTML structure, basic pages, no blog
* v2 Vue built over the top, code modularised.
* v3 TBD CMS (likely to be Wordpress but this may, and hopefully will, change to something .net based).
