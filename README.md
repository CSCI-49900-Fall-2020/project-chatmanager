# ChatManager Documentation Website

**Title:** How to test documentaion website locally

**Getting Started**
- pull remote repo branch gh-pages
- Testing the website locally requries ruby installed in your development environment
    - [for mac](https://jekyllrb.com/docs/installation/macos/)
    - [for windows, including linux subsystem](https://jekyllrb.com/docs/installation/windows/)
    - [for linux](https://jekyllrb.com/docs/installation/ubuntu/)
- download the ruby packages that will generate a static site and track dependency gems:`gem install jekyll bundler` 
- install dependency gems: `bundle install`
- run a local server to render the site on localhost:4000 `bundle exec jekyll serve`
- after you are done with local testing, run this command to clean: `buncle exec jekyll clean`
- any changes make to the website only need to be merged to the repo branch gh-pages. Github Pages will automatically generate a static site from this branch
