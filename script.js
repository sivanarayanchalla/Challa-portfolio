
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark"));
}

window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
  }

  // Plotly chart example
  const trace1 = {
    x: ['2020', '2021', '2022', '2023'],
    y: [100, 200, 300, 250],
    type: 'scatter',
    name: 'Zimbabwe'
  };
  const trace2 = {
    x: ['2020', '2021', '2022', '2023'],
    y: [150, 220, 270, 300],
    type: 'scatter',
    name: 'Uganda'
  };
  const data = [trace1, trace2];
  const layout = {
    title: 'Gold Export Trends',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Export Volume (in Millions)' }
  };
  Plotly.newPlot('chartDiv', data, layout);
};
