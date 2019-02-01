# Tools used in site
The site uses `Jekyll` to compile the static content and provide some useful build tools (`jekyll-watch`).

It also uses `React` in certain places. Probably, I will switch over to Gatsby at some time. In the interim, I am using a JSX preprocessor to avoid having `babel` loaded in the browser. So, generating the website is kind of a 2-step process, right now.

1.  Compile the JSX to JavaScript using the `babel` preprocessor: `npx babel --watch react/ --out-dir js/react --presets react-app/prod `
2.  Build the site: `bundle exec jekyll build`

View by opening the `_site/index.html` file.