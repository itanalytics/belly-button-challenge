const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);

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
        x: sample_values,
        y: otu_ids,
        text: otu_labels,
        type: 'bar',
        orientation: 'h'
      }
    ];
    
    Plotly.newPlot("bar", bar);

  }
  )
}
    
    
    






  });

