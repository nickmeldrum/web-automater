// when on classes page, select a date:
[].slice.call(document.getElementsByTagName("li")).filter(function(el) {return (el.getAttribute("data-date") == null) ? false : el.getAttribute("data-date") == '2015.10.09';})[0].click();


