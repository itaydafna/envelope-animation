import React from 'react';

const Defs = () => <defs>
  <filter
    id="filter-2"
    x="-6%"
    y="-7%"
    width="112.1%"
    height="114%"
    name="filter-2"
  >
    <feOffset result="shadowOffsetOuter1" in="SourceAlpha" />
    <feGaussianBlur
      result="shadowBlurOuter1"
      stdDeviation={2}
      in="shadowOffsetOuter1"
    />
    <feColorMatrix
      values="0 0 0 0 0.03 0 0 0 0 0.11 0 0 0 0 0.33 0 0 0 0.25 0"
      in="shadowBlurOuter1"
    />
  </filter>
  <linearGradient
    id="linear-gradient"
    x1="-105.48"
    y1="415.3"
    x2="-106.65"
    y2="413.36"
    gradientTransform="matrix(3, 0, 0, -3, 359.73, 1348)"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset={0} stopColor="#d3ddfc" stopOpacity="0.6" />
    <stop offset={1} stopColor="#b8c8fa" />
  </linearGradient>
  <linearGradient
    id="linear-gradient-2"
    x1="-126.81"
    y1="453.04"
    x2="-127.99"
    y2="451.09"
    gradientTransform="matrix(5, 0, 0, -5, 725.73, 2357)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-3"
    x1="-126.81"
    y1="453.04"
    x2="-127.99"
    y2="451.09"
    gradientTransform="matrix(5, 0, 0, -5, 755.73, 2417)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-4"
    x1="-126.81"
    y1="453.04"
    x2="-127.99"
    y2="451.09"
    gradientTransform="matrix(5, 0, 0, -5, 885.73, 2364)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-5"
    x1="-126.81"
    y1="453.04"
    x2="-127.99"
    y2="451.09"
    gradientTransform="matrix(5, 0, 0, -5, 784.73, 2381)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-6"
    x1="-138.81"
    y1="474.26"
    x2="-139.99"
    y2="472.32"
    gradientTransform="matrix(8, 0, 0, -8, 1336.73, 3852)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-7"
    x1="-149.87"
    y1="500.34"
    x2="-151.05"
    y2="498.77"
    gradientTransform="matrix(25.77, 8.37, 7.54, -23.21, 302.71, 12916.26)"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset={0} stopColor="#829ef6" />
    <stop offset={1} stopColor="#b8c8fa" />
  </linearGradient>
  <linearGradient
    id="linear-gradient-8"
    x1="-151.05"
    y1="492.98"
    x2="-152.22"
    y2="491.41"
    gradientTransform="matrix(19.56, -0.68, -0.62, -17.61, 3388.17, 8663.45)"
    xlinkHref="#linear-gradient-7"
  />
  <linearGradient
    id="linear-gradient-9"
    x1="-158.09"
    y1="493.38"
    x2="-159.27"
    y2="491.8"
    gradientTransform="matrix(20.12, -10.25, -9.23, -18.12, 7802.75, 7356.34)"
    xlinkHref="#linear-gradient-7"
  />
  <linearGradient
    id="linear-gradient-10"
    x1="-138.81"
    y1="474.26"
    x2="-139.99"
    y2="472.32"
    gradientTransform="matrix(8, 0, 0, -8, 1304.73, 3816)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-11"
    x1="-105.48"
    y1="415.3"
    x2="-106.65"
    y2="413.36"
    gradientTransform="matrix(3, 0, 0, -3, 419.73, 1296)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-12"
    x1="-105.48"
    y1="415.3"
    x2="-106.65"
    y2="413.36"
    gradientTransform="matrix(3, 0, 0, -3, 532.73, 1334)"
    xlinkHref="#linear-gradient"
  />
  <linearGradient
    id="linear-gradient-13"
    x1="-105.48"
    y1="415.3"
    x2="-106.65"
    y2="413.36"
    gradientTransform="matrix(3, 0, 0, -3, 551.73, 1249)"
    xlinkHref="#linear-gradient"
  />
</defs>;

export default Defs;