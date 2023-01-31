var mm9_data = [2148243458, 1871701781, 1444486004, 1366768940, 1350370643, 1157796704, 1135458799, 949874100, 831021897, 776079957, 716073983, 677002197, 635888917, 557810552, 554534538, 443118947, 441097563, 413586474, 147689202, 2267757903, 13037589];
var mm9_labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'X', 'Y'];

var mm10_labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "X", "Y"];
var mm10_data = [194044917, 186939242, 169820824, 158821424, 154913754, 152524553, 140273252, 135374737, 134452384, 132430240, 114142980, 106368585, 100338915, 88827254, 78774742, 76117153, 63811651, 62435964, 46944323, 49691432, 154913754];

var mm39_labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "X", "Y"];
var mm39_data = [190869344, 185489880, 169850848, 158576718, 155908295, 154512824, 141506674, 135225857, 133787995, 131584478, 113643699, 107434427, 100871189, 87786492, 77113933, 74805093, 63253583, 61452654, 47148613, 49536435, 154512824];

var hg19_labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "X", "Y"];
var hg19_data = [249250621, 243199373, 198022430, 191154276, 180915260, 171115067, 159138663, 146364022, 141213431, 135534747, 135006516, 133851895, 115169878, 107349540, 102531392, 90354753, 81195210, 78077248, 59128983, 63025520, 48129895, 51304566, 155270560];


var width = 800, height = 600, radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) { return d; });

var arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70);

var svg = d3.select("#myDiv").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g = svg.selectAll(".arc").data(pie(mm9_data)).enter().append("g").attr("class", "arc");

var zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on("zoom", zoomed);

var chart = d3.select("#myDiv")
    .call(zoom);

function zoomed() {
    chart.attr("transform", d3.event.transform);
}
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
    .attr("text-anchor", "middle")
    .text(function(d, i) { return mm9_labels[i]; });


// svg.append("text").attr("x", 0).attr("y", -(height / 2) + 30)
//     .text("Mouse Genome (mm9) Chromosome Sizes")
//     .style("font-size", "20px").style("text-anchor", "middle");

