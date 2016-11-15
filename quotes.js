function quote(select)
{ return json[select].quote; }

function author(select)
{ return json[select].author; }

var json;

$.getJSON("quotes_list.json", (data) => { json = data; });

$(document).ready(function()
{
    $("#new_quote").on("click", function()
    {
        var pick = (Math.random() * json.length) | 0;
        $(".quote_line").html(quote(pick) + ".");
        $(".author_line").html(author(pick) + ".");
    });

});
