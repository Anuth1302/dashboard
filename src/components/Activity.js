// // src/components/Activity.js
// import React from 'react';
// import './Activity.css';

// const Activity = () => {
//   return (
//     <div className="activity">
//       <h3>Activity</h3>
//       <div className="chart"> {/* Add your chart implementation here */} </div>
//     </div>
//   );
// }

// export default Activity;

// src/components/Activity.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Activity.css';
import { plugins } from 'chart.js/auto';

const Activity = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [500, 600, 800, 700, 900, 1000, 1200, 1100, 900, 800, 700],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 0.5,
        borderRadius: 5,  // Add this to round the corners
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins:{
      title:{
        display:false
      },
      legend:{
        display:false
      }
    }
  };

  return (
    <div className="activity">
      <h3>Activity</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Activity;
