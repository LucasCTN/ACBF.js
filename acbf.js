var path = "file:///C:/Users/Norah/Documents/Projetos/ACBFJS/Anda_s_Game/AndasGame.acbf";

var canvas_id = "the-canvas";

function readXML(file_text){
    if (window.DOMParser)
    {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(file_text, "text/xml");
        var coverpage = xmlDoc.getElementsByTagName("coverpage")[0].getElementsByTagName("image")[0].attributes["href"].nodeValue;

        var pages = xmlDoc.getElementsByTagName("page");
        alert(coverpage);
    }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                readXML(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile(path);