const CustomQuarterTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="bg-white p-4 shadow-lg rounded-lg border text-sm">
        <p className="font-bold mb-2">{label}</p>

        <p>Total Issues : <span className="font-semibold text-red-500">
          {data.totalIssues}
        </span></p>

        <p>Blocker : {data.blocker}</p>
        <p>Critical : {data.critical}</p>
        <p>Major : {data.major}</p>
                <p>Minor : {data.minor}</p>
        <p>Normal : {data.normal}</p>
        
      </div>
    );
  }
  return null;
};

export default CustomQuarterTooltip;
