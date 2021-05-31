import React from 'react';
import Svg from 'react-native-svg';

import { SVGProps } from './svg.types';

const Ball: React.FC<SVGProps> = ({ width, height }) => (
  <Svg
    width={width || '100%'}
    height={height || 55}
    viewBox="0 0 44 44"
    fill="none"
  >
    <path fill="url(#pattern0)" d="M0 0H44V44H0z" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0" transform="scale(.00833)" />
      </pattern>
      <image
        id="image0"
        width={120}
        height={120}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </Svg>
);

export default Ball;