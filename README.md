# campus-diaries
1.12 column grid (60px width, 20px gutter) {Use any css framework}
2.Header Section
  a.Place at top of the Page
  b.Add a Logo to the left of header
  c.Functionality  
    i.Not visible when a Page is scrolled up
      1.Visible again, when the scrolling stops
    ii.Visible when the Page is scrolled down
  d.Set height to 60px
3.Content Section
  a.Two column Layout
    i.Main Content 
      1.Had container <div class=”img-wrapper”>
        a.Always at the center of the screen
        b.Contains <img>
          i.href : 
          http://dkzstslcvgwbc.cloudfront.net/sites/all/themes/campus_diaries/images/front/<number>.jpg
          ii.Randomise <number> from 1 to 10, when page load. This will show different images whenever the page is refreshed.
        c.set max width to 500px
    ii.Sidebar with width 300px
  b.Set min height of content as 1000px
4.Sticky Bar
  a.Place above Footer
  b.Functionality
    i.Sticks at the bottom of screen when footer is not visible on viewport
    ii.Sits just above the footer, when footer is visible on viewport
  c.Reference : Check the sticky bar here
5.Footer Section
  a.At the bottom of the Page
  b.Set height to 120px
