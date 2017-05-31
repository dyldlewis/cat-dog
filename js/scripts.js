$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#bark").prepend("<li>Ruff Ruff</li>");
    $("ul#meow").prepend("<li>Meow</li");
  });

  $("button#cat").click(function() {
    $("ul#bark").prepend("<li>Ruff Ruff</li>");
    $("ul#meow").prepend("<li>Meow</li");
  });
});
