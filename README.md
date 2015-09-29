##An OSM Blog. Currently in test-phase.

###Installation

This site was built using Jekyll, a static site generator ([intro to Jekyll video](https://www.youtube.com/watch?v=O7NBEFmA7yA)).

This is an existing [Grunt project](http://gruntjs.com/getting-started). The Grunt file does many optimization functions and builds the Jekyll site. Assuming that the Grunt CLI has been installed and that the project has already been configured with a package.json and a Gruntfile, it's very easy to start working with Grunt:

1. Navigate to the project's root directory.
2. Install project dependencies with `npm install` command.
3. Run Grunt with `grunt` command.
4. Run `bundle install` to get required gems.

**Note:** If jekyll build results in unresolved specs for some of the gems, try running `sudo bundle clean --force` followed by `bundle install`

###Help
####Posts
- For the the images set in the YAML front matter (i.e. the feature image property), include only the file name and upload the image file into the 'images/posts/' folder (alternatively you can also use a URL link to an image file).
- For the Facebook share image: "Use images that are at least 1200 x 630 pixels for the best display on high resolution devices."

####Authors
- For the avatar image set in `authors.yml` include only the file name and upload the image file into the `images/authors/` folder.
- Add a disqus-shortname to your institution in `authors.yml` to make [Disqus](https://disqus.com/) comments available on all your institutions posts.

####Jekyll
- The [Jekyll help](https://jekyllrb.com/docs/github-pages/) has tips on deploying to GitHub pages.
   - This involves changing the baseurl name in the \_config file.
   - If you’d like to preview your site before committing/deploying using `jekyll serve`, be sure to pass an empty string to the `--baseurl` option, so that you can view everything at `localhost:4000` normally (without `/project-name` at the beginning): `jekyll serve --baseurl ''`
- For a post to display on the map add a `coord` property to the YAML front matter block. Include the geographic coordinates enclosed in quotation marks, separated by a comma (space or not doesn't matter), and with latitude first (the same order as used in the URLs of osm.org). For example `coord: "-17.8087, 30.9289"`
