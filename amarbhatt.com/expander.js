// you can override default options globally, so they apply to every .expander() call
$.expander.defaults.slicePoint = 80;

$(document).ready(function() {
  /*// simple example, using all default options unless overridden globally
  $('div.expandable').expander();*/

  // *** OR ***

  // override default options (also overrides global overrides)
  /*$('div.expandable ul').expander({
    slicePoint:       100,  // default is 100
    widow: 2,
    expandEffect: 'show',
    expandPrefix:     ' ', // default is '... '
    expandText:       'read more', // default is 'read more'
    collapseTimer:    5000, // re-collapses after 5 seconds; default is 0, so no re-collapsing
    userCollapseText: 'read less'  // default is 'read less'
  });
  $('div.expandable p').expander({
    slicePoint:       100,  // default is 100
    widow: 2,
    expandEffect: 'show',
    expandPrefix:     ' ', // default is '... '
    expandText:       'read more', // default is 'read more'
    collapseTimer:    5000, // re-collapses after 5 seconds; default is 0, so no re-collapsing
    userCollapseText: 'read less'  // default is 'read less'
  });*/

});