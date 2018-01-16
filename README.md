# PDX-CODE-GUILD-capstone
capstone for 11/27-2/23 bootcamp

CAPSTONE PROPOSAL
NAME: HXCPDX.com

PRODUCT OVERVIEW: 
This is a site that will use community-fed data bases to web scrape for events and articles pertinent to the community.
Members will be able to submit keywords (band names, venues, record labels, websites) to be approved and appended to a databases that a pythonic web scraper will parse for relevant information.
This information will then be displayed and visible to memebers of the community.
Submissions will be limited to only those users with the weekly updated community access key.
Key will be randomly generated every 7 days, ten random digits. It can be shared by non-users who care to contribute keywords.
Members will also be able to share live photos of bands for the Live Pics page
There will be a page dedicated to local bands with links to their bandcamp URLs.

Functioning Website:
  Grid or Wireframe
  Home page:
    logo of HXCPDX in top left corner
    left side bar of google calendar, day by day concert list
    nav bar of links to other pages on site, login for community members to submit keywords for approval
    body of instagram feed
    footer for external links to popular local culture-relevant sites
    background and theme to be subtle 
  Logo:
    animated html/css block letter logo  
  Side bar:
    google calendar to be sent data from web scraping python
  Nav bar:
    flex box with expanding elements on hover
    background images on divs
    community div has email and password login displayed with placeholders
  Body:
    instagram developer API to feed latest instagram posts from @hxcpdx
    4x 200pxwidth images
  Footer:
    bottom right aligned
    no text decoration
    links to heir, compound, instagram, brooklynvegan, lambgoat, shrunkenhead, cals pharmacy
 Community Page:
    Display Logo, Nav, Side, and Footer
    Body:
      after login:
        form for submitting keywords to separate databases
        bands, record labels, venues, websites
      non-user:
        form to enter weekly access key: locks keyword submission forms
  News Page:
     Display Logo, Nav, Side, and Footer
     Body:
       Grid layout 2x2 200px divs
       Populated by web scrape relevant to keywords databases
       display snapshot of website window and title of article
  Live Pics Page:
     Display Logo, Nav, and Footer
     Body:
       Flex Box Layout
       Slideshow of user submitted live shots 400px main with left and right clickable arrows 
  Local Bands Page:
     Display Logo, Nav, Side, and Footer
     Body:
       Grid layout 3x3 200px divs
       Populated by web scraped profile pic from bandcamp with external link
       

    
Website Database:
  URL List to be scraped for concert and news information relative to keyword database.
Keyword Database:
  Band Name, record label and venue list to be appended by User Submission based on approval.
User Database:
  Email list for community to recieve the weekly generated access key.
Access Key:
  10 digits, randomly generated every 7 days
  Unlocks keyword submission for non-users.
  Not needed for logged in users
  Emailed to users on a weekly basis to share access






SUBMISSION
Create a new git repo based on your project name in GitHub.
Init that repository with a readme.
Write up your proposal as proposal.md and link to it from the readme.
I don’t care that you learn all of the fancy parts of writing Markdown documentation, but just get some basic sections that follow the rubric above.

Email me the URL to your capstone repo on GitHub before the proposal is due.
