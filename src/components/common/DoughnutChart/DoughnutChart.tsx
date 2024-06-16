import React from 'react';

type DoughnutChartProps = {
  data: { value: number; color: string }[];
  size: number;
  innerRadius: number;
  showTotal?: boolean;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  size,
  innerRadius,
  showTotal = true,
}) => {
  const radius = size / 2;
  const total = data.reduce((acc, { value }) => acc + value, 0);

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      'L',
      x,
      y,
      'L',
      start.x,
      start.y,
    ].join(' ');

    return d;
  };

  let startAngle = 0;

  return (
    <svg width={size} height={size}>
      {data.map((slice, index) => {
        const { value, color } = slice;
        const endAngle = startAngle + (value / total) * 360;
        const d = describeArc(radius, radius, radius, startAngle, endAngle);
        startAngle = endAngle;

        return <path key={index} d={d} fill={color} />;
      })}
      <circle cx={radius} cy={radius} r={innerRadius} fill="white" />
      {showTotal && (
        <text
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fill="black"
        >
          {total}
        </text>
      )}
    </svg>
  );
};
export default DoughnutChart;
