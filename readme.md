# Version 2020
# The story so far...
Having gone freelance in summer 2019 I decided an update was due. That summer I carried out an audit and refactor of the CSS which improved the maintainability of the styling. This was all started by coming back to the CSS a long while later I realised that the approach to the CSS structure I had taken really did not work for me, things were broken up across files (a Sass file for each screen size),this led to having to trawl through files in order to make an small change. It seemed like a good approach in theory, I can safely say it is not productive in practise! The new approach (detailed below) resolved this and made me want to work on the website again. However, following a very busy period at work that lasted up to the end of summer 2020 I managed to design for a case studies landing page in Adobe Illustrator but had not been able to code this.

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

Added a back to top button on longer pages. This is implemented by adding the class 'longContent' on the body (where it already has a 'content' class) and placing the following HTML below the header element and above the main div element in the article.
```
<div class="backToTop btn" id="backToTop">Back to top</div>
```

The current roadmap is:
* v1 Flat HTML structure, basic pages, no blog
* v2 Vue built over the top, code modularised.
* v3 TBD CMS (likely to be Wordpress but this may, and hopefully will, change to something .net based).

