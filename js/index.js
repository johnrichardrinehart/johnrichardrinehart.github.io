(function() {
   wsm = WebStorageModule;
   pcm = paletteChooserModule;
   // see if the user has visited
   var has_visited = wsm.hasVisited();
   // if the haven't then give them a number that determine's the color scheme
   var color_number = wsm.mySessionStorage.getItem('color_number');
   if (!has_visited || !color_number) {
      var color_number = Math.floor(Math.random() * (pcm.background_palette.length));
      wsm.mySessionStorage.setItem('color_number',color_number);
   }
   var num_visits = wsm.countVisits() + 1;
   wsm.myLocalStorage.setItem('num_visits',num_visits.toString());
   pcm.paletteChooser(color_number);

   // Taken from: https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser
   function placeCaretAtEnd(el) {
      el.focus();
      if (typeof window.getSelection != "undefined"
              && typeof document.createRange != "undefined") {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(false);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
      } else if (typeof document.body.createTextRange != "undefined") {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(false);
          textRange.select();
      }
  }

  placeCaretAtEnd(document.getElementById('properties'))
})()
