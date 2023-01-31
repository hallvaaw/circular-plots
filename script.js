var data = [2148243458, 1871701781, 1444486004, 1366768940, 1350370643, 1157796704, 1135458799, 949874100, 831021897, 776079957, 716073983, 677002197, 635888917, 557810552, 554534538, 443118947, 441097563, 413586474, 147689202, 2267757903, 13037589];
var labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'X', 'Y'];

var width = 800, height = 600, radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) { return d; });

var arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70);

var svg = d3.select("#myDiv").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

g.append("path").attr("d", arc)
    .style("fill", function(d, i) { return color(i); })
    .on("mouseover", function(d, i) {
        var that = this;
        setTimeout(function() {
            d3.select(that).transition().duration(100)
                .attr("d", d3.arc().outerRadius(radius + 10).innerRadius(radius - 60))
        }, 100);
    })
    .on("mouseout", function(d, i) {
        var that = this;
        setTimeout(function() {
            d3.select(that).transition().duration(100)
                .attr("d", d3.arc().outerRadius(radius - 10).innerRadius(radius - 70))
        }, 100);
    })
    .on("click", function(d, i) {
        var that = this;
        setTimeout(function() {
            d3.select(that).transition().duration(100)
                .attr("d", d3.arc().outerRadius(radius - 10).innerRadius(radius - 70))
        }, 100);
    });

g.append("text").attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .text(function(d, i) { return labels[i]; });

// svg.append("text").attr("x", 0).attr("y", -(height / 2) + 30)
//     .text("Mouse Genome (mm9) Chromosome Sizes")
//     .style("font-size", "20px").style("text-anchor", "middle");

