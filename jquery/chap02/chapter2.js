$(document).ready(function () {
    $("#selected-plays > li").addClass("horizontal");
    $("li:not(.horizontal)").addClass("sub-level");
    $("a[href$=pdf]").addClass("pdflink");
    $("a[href^=mailto]").addClass("mailto");
    $("a[href*=henry]:not(.mailto)").addClass("henrylink");
    // $("tr:even").addClass("alt");
    $("tr:nth-child(odd)").addClass("alt");
    // $("td:contains(Henry)").nextAll().addClass("highlight");

    $("td:contains(Henry)").nextAll().andSelf().addClass("highlight");
    // $("td:contains(Henry)").parent().find("td:eq(0)").addClass("highlight")
    // .end().find("td:eq(1)").addClass("highlight");

    
});

$(function() {
    let obj = [
        {"area":"a"},
        {"area":"b"},
        {"area":"c"}
    ]

    $(obj).each(function(i, o) {
        console.log(i+":", o);
    });
    console.log("===================");
    $.each($("li:contains(희극)"), function(i, o) {
        console.log(i+":", o);
    });
})