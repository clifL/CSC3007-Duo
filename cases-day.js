


Promise.all([d3.csv("covid-19-case-numbers/number-of-local-cases-by-day.csv")]).then(data1 => {

  console.log(data1[0]);
  let g_0 = []
  let g_1 = []
  let y_data = []
  let y_data_1 = []
  let y_data_2 = []
  let y_data_3 = []
  let y_data_4 = []
  let y_data_5 = []
  let y_data_6 = []
  let y_data_7 = []
  let y_data_8 = []

  // Data preprocessing
  data1[0].forEach(e => {
    // e.source = e.infector;
    // e.target = e.infectee;
    // console.log(e.age_group)
    if (e.day == 'mon') {
      y_data_1.push(e.count);
    }
    if (e.day == 'tue') {
      y_data_2.push(e.count);
    }
    if (e.day == 'wed') {
      y_data_3.push(e.count);
    }
    if (e.day == 'thu') {
      y_data_4.push(e.count);
    }
    if (e.day == 'fri') {
      y_data_5.push(e.count);
    }
    if (e.day == 'sat') {
      y_data_6.push(e.count);
    }
    if (e.day == 'sun') {
      y_data_7.push(e.count);
    }
  });



  // for (let i=0; i<28; i++){
  //   for (let j=0; j<8; j++){
  //     y_data[i][j] = data1[0][0]["count_of_case"];
  //     console.log(data1[0][0]["count_of_case"]);
  //   }
  // };



  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "Monday",
  //       data:  y_data_1,
  //       borderColor: "#c2ff68",

  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
  //     },
  //     {
  //       label: "Tuesday",
  //       data:  y_data_2,
  //       borderColor: "#e04a59",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //     {
  //       label: "Wednesday",
  //       data:  y_data_3,
  //       borderColor: "#006ea2",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //     {
  //       label: "Thursday",
  //       data:  y_data_4,
  //       borderColor: "#7d6277",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //     {
  //       label: "Friday",
  //       data: y_data_5,
  //       borderColor: "#7d6277",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //     {
  //       label: "Saturday",
  //       data:  y_data_6,
  //       borderColor: "#7d6277",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //     {
  //       label: "Sunday",
  //       data:  y_data_7,
  //       borderColor: "#eeee00",
  //       //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     },
  //   ],
  // };

  const data = {
    labels: labels,
    datasets: [{
      datalabels: {
        backgroundColor: "white",
        font: {
          weight: "bold",
          size: 25,
        },
        borderWidth: 10,
        borderRadius: 2,
      },
      label: "Cases",
      data: [15612, 34062, 27096, 21778, 20069, 19708, 15345],
      backgroundColor: [
        'rgba(253, 231, 37, 0.2)',
        'rgba(251, 182, 26, 0.2)',
        'rgba(237, 105, 37, 0.2)',
        'rgba(188, 55, 84, 0.2)',
        'rgba(120, 28, 109, 0.2)',
        'rgba(50, 10, 94, 0.2)',
        'rgba(0, 0, 4, 0.2)'
      ],
      borderColor: [
        'rgb(253, 231, 37)',
        'rgb(251, 182, 26)',
        'rgb(237, 105, 37)',
        'rgb(188, 55, 84)',
        'rgb(120, 28, 109)',
        'rgb(50, 10, 94)',
        'rgb(0, 0, 4)'
      ],
      borderWidth: 1
    }]
  };

  // Style Configurations
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "",
        },
      },
    },
  };

  // Plotting
  let myChart = document.getElementById("cases-day").getContext("2d");
  let multiLineChart = new Chart(
    myChart,
    {
      type: "bar",
      data: data,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "COVID-19 Infection Rate By Day for past 28 days",
            font: {
              size: 30,
              weight: 'bold',
              color: 'black',
            },
          },
        }
      },

    },

  );
})
