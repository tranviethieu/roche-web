import React from 'react';
type DoughnutChartProps = {
  total: number;
  value: number;
  size?: number;
  thickness?: number;
  valueFormat?: string;
};

const DoughnutChartTime: React.FC<DoughnutChartProps> = ({
  total,
  value,
  valueFormat,
  size = 100,
  thickness = 10,
}) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = value / total;
  const offset = circumference * (1 - percentage);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={thickness}
        fill="none"
      />
      {/* Value circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#4979D1"
        strokeWidth={thickness}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from top
      />
      {/* Text value in the center */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={size * 0.2}
        fontWeight={500}
        fill="#000"
      >
        {valueFormat}
      </text>
    </svg>
  );
};

export default DoughnutChartTime;
