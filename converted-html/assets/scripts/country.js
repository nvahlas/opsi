var tags = $('p.tag-list span').remove();
$.each(
  $(tags).text().split(";"),
  function(idx, tag) {
    $('p.tag-list').append($('<span></span>').text(tag.trim()));
  }
);