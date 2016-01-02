function getParameterByName(key) {
  key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + key + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setParameterByName(key, value) {
  baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  urlQueryString = document.location.search;
  var newParam = key + '=' + encodeURIComponent(value),
  params = '?' + newParam;

  // If the "search" string exists, then build params from it
  if (urlQueryString) {
    keyRegex = new RegExp('([\?&])' + key + '[^&]*');
    // If param exists already, update it
    if (urlQueryString.match(keyRegex) !== null) {
      params = urlQueryString.replace(keyRegex, "$1" + newParam);
    } else { // Otherwise, add it to end of query string
      params = urlQueryString + '&' + newParam;
    }
  }
  window.history.replaceState({}, "", baseUrl + params);
}

var dial = d3.select(".dial")
    .attr("width", "38mm")
    .attr("height", "38mm");

dial.append("rect")
    .attr("x","0mm")
    .attr("y","0mm")
    .attr("width","38mm")
    .attr("height","15.7mm")
    .attr("fill","#82836d");

dial.append("rect")
    .attr("x","0mm")
    .attr("y","15.7mm")
    .attr("width","38mm")
    .attr("height","22.2mm")
    .attr("fill","#fff");

dial.append("line")
    .attr("x1", "0mm")
    .attr("x2", "38mm")
    .attr("y1", "19.2mm")
    .attr("y2", "19.2mm")
    .attr("stroke", "#82836d");

dial.append("line")
    .attr("x1", "0mm")
    .attr("x2", "38mm")
    .attr("y1", "19.2mm")
    .attr("y2", "19.2mm")
    .attr("stroke", "#82836d");

dial.append("line")
    .attr("x1", "15.5mm")
    .attr("x2", "15.5mm")
    .attr("y1", "0mm")
    .attr("y2", "16mm")
    .attr("stroke", "#fff");

dial.append("line")
    .attr("x1", "15.5mm")
    .attr("x2", "15.5mm")
    .attr("y1", "15.7mm")
    .attr("y2", "19.2mm")
    .attr("stroke", "#82836d");

dial.append("circle")
    .attr("cx", "19mm")
    .attr("cy", "19mm")
    .attr("r", "19mm")
    .attr("stroke", "#ccc")
    .attr("stroke-width", "0.1mm")
    .attr("fill", "none");

dial.append("text")
    .attr("class", "info")
    .attr("x", "17.5mm")
    .attr("y", "5mm")
    .text("FIRE");

dial.append("text")
    .attr("class", "info")
    .attr("x", "17.5mm")
    .attr("y", "9.5mm")
    .text("POLICE");

dial.append("text")
    .attr("class", "info")
    .attr("x", "17.5mm")
    .attr("y", "14mm")
    .text("AMBULANCE");

dial.append("text")
    .attr("class", "info")
    .attr("x", "14mm")
    .attr("y", "9.5mm")
    .text("DIAL")
    .style("font-size","3.8mm")
    .style("text-align","right")
    .style("text-anchor","end")
    .style("fill", "#fff");

dial.append("text")
    .attr("class", "info")
    .attr("x", "14mm")
    .attr("y", "14mm")
    .text("999")
    .style("font-size","4.0mm")
    .style("text-align","right")
    .style("text-anchor","end")
    .style("letter-spacing", "0.7mm");

dial.append("text")
    .attr("class", "info")
    .attr("x", "18.5mm")
    .attr("y", "18.4mm")
    .text("OPERATOR")
    .style("text-align","center")
    .style("text-anchor","left")
    .style("fill", "#82836d");

dial.append("text")
    .attr("class", "info")
    .attr("x", "11.7mm")
    .attr("y", "18.5mm")
    .text("100")
    .style("font-size","3.2mm")
    .style("text-align","center")
    .style("text-anchor","end")
    .style("letter-spacing", "0.3mm")
    .style("fill", "#82836d");

dial.append("text")
    .attr("class", "exch")
    .attr("x", "19mm")
    .attr("y", "24.1mm")
    .text(getParameterByName("e"));

dial.append("text")
    .attr("class", "num")
    .attr("x", "19mm")
    .attr("y", "30.2mm")
    .text(getParameterByName("n"));

function updateExchange() {
  var exchange = document.getElementById("exchange").value;
  dial.select(".exch").text(exchange);
  setParameterByName("e", exchange);
}

function updateNumber() {
  var exchange = document.getElementById("number").value;
  dial.select(".num").text(exchange);
  setParameterByName("n", exchange);
}

document.getElementById("exchange").value = getParameterByName("e");
document.getElementById("number").value = getParameterByName("n");
