google.charts.load('current', {packages: ['table']});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1v6i3MFlBfTom7p_WZHs-hK850D2pTg2kk4XJbrLlkd8/gviz/tq?output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E label A "Scientific Name", B "Common Name", C "Link", D "Growth Form", E "Family"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
