# Tools used in site
The site uses `Jekyll` to compile the static content and provide some useful build tools (`jekyll-watch`).

It also uses `React` in certain places. Probably, I will switch over to Gatsby at some time. In the interim, I am using a JSX preprocessor to avoid having `babel` loaded in the browser. So, generating the website is kind of a 2-step process, right now.

1.  Compile the JSX to JavaScript using the `WebPack` bundler: `npx webpack`
2.  Build the site: `bundle exec jekyll build --incremental`

View by opening the `_site/index.html` file.