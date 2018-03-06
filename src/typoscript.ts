# Default PAGE object:
page = PAGE

# Define the template
page.10 = TEMPLATE

page.10.template = FILE

page.10.template.file = fileadmin/template/t.html

# Insert shortcut icon in the head of the website
# page.shortcutIcon = fileadmin/doc_tut_templating/favicon.ico
# Insert stylesheet in the head of the website
# page.includeCSS.base = fileadmin/doc_tut_templating/style.css

# Work with the subpart "DOCUMENT"
page.10.workOnSubpart = DOCUMENT

// Define the subparts, which are inside the subpart DOCUMENT
page.10.subparts {

 CONTENTLEFT = CONTENT
 CONTENTLEFT < styles.content.get
 CONTENTLEFT.select.where = colPos=1

 CONTENTMIDDLE = CONTENT
 CONTENTMIDDLE < styles.content.get

 CONTENTRIGHT = CONTENT
 CONTENTRIGHT < styles.content.get
 CONTENTRIGHT.select.where = colPos=2

// The subpart TOPNAV outputs the main navigation
TOPNAV = HMENU
TOPNAV.wrap = <ul>|</ul>
// "stdWrap" properties are applied after "wrap".
TOPNAV.stdWrap.wrap = <div id="nav_main">|</div>

// Definition for pages on the first level of the menu
TOPNAV.1 = TMENU
TOPNAV.1 {

    // Definitions per page
    // NO: default formatting
    NO = 1
    NO {
      // Each entry is wrapped by
      // <li> </li>
      allWrap = <li>|</li>
    }

    // ACT: User is on this or below this page
    // Activate this state for this menu
    ACT = 1
    ACT {
      // Use another wrap
      allWrap = <li id="current">|</li>
    }
}

//SUBNAV
SUBNAV = HMENU
SUBNAV {
            // Only display subpages of the page from the main
            // navigation, which is in the current rootline.
            // Default value of entryLevel is 0, which are the
            // pages on the first level.
            // We want to begin with those subpages on level 2.
            entryLevel = 1

            // Definition for pages on level 1
            1 = TMENU
            1 {
                    wrap = <ul id="submenu">|</ul>
                    // Always expand all subpages.
                    expAll = 1

                    // Definition per page
                    // NO: default formatting
                    NO = 1
                    NO {
                            // Each entry is wrapped by
                            // <li> </li>
                            wrapItemAndSub = <li>|</li>
                    }

                    // ACT: User is on this or below this page
                    // Activate this state for this menu
                    ACT = 1
                    ACT {
                            // Use another wrap
                            wrapItemAndSub = <li id="active">|</li>
                    }
            }

            // Definition for pages on level 2
            // Copy the definitions from level 1,
            // but use another wrap.
            2 < .1
            2.wrap = <ul>|</ul>
    }

}

// Define the marks inside the subpart DOCUMENT
page.10.marks {

 TITLE = TEXT
 TITLE.field = title

}
