function quote(select)
{ return json[select].quote; }

function author(select)
{ return json[select].author; }

function write_quote()
{
    var pick = (Math.random() * json.length) | 0;
    $(".quote_line").html(quote(pick) + ".");
    $(".author_line").html(author(pick) + ".");
}

var json;

$.getJSON("quotes_list.json", (data) => { json = data; write_quote(); });

$(document).ready(function()
{
    // On button press
    $("#new_quote").on("click", write_quote);
});
