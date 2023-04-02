const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);

});

function init() {
 
  var selector = d3.select("#selDataset");

  d3.json(url).then(function(data) {
    var subjectID = data.names;

    for (let i = 0; i < subjectID.length; i++){
      selector
        .append("option")
        .text(subjectID[i])
        .property("value", subjectID[i]);
    };

    var initSample = subjectID[0];
    Charts(initSample);
  });
}

function Charts(sample) {
  d3.json(url).then(function(data) {
    var samples = data.samples;
    var results = samples.filter(sampleObj => sampleObj.id == sample);
    var result = results[0];

    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    var bar = [
      {
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'
      }
    ];
    
    Plotly.newPlot("bar", bar);

    var bubble = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
      } 
    }
    ];

  Plotly.newPlot("bubble", bubble)

  });
}

function optionChanged(newSample) {
  Charts(newSample);
}
    
init();
