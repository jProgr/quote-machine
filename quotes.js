function quote(select)
{ return json[select].quote; }

function author(select)
{ return json[select].author; }

function write_quote()
{
    var pick = (Math.random() * json.length) | 0;
    $(".quote_line").html(quote(pick) + ".");
    $(".author_line").html(author(pick) + ".");
    update_tweet_button(quote(pick), author(pick));
}

function update_tweet_button(quote, author)
{
    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("\"" + quote + "\"") + " -" + encodeURIComponent(author);
    $(".tweet").prop("href", url);
}

var json;

$.getJSON("quotes_list.json", (data) => { json = data; write_quote(); });

$(document).ready(function()
{
    // On button press
    $("#new_quote").on("click", write_quote);
});
