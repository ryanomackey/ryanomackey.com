import React, { useState, useEffect } from 'react';

import { Wire, Bulb } from './ChristmasLights.styles';

import debounce from '../../utils/debounce';

const date = new Date();

const isDecember = date.getMonth() === 11;

const ChristmasLights = () => {
  const getLightCount = () => Math.floor(window.innerWidth / 46);

  const [lightCount, setLightCount] = useState(getLightCount());

  useEffect(
    () => {
      const handleResize = debounce(() => setLightCount(getLightCount()), 250);

      window.addEventListener('resize', handleResize);
    },
    [lightCount],
  );

  if (isDecember) {
    return (
      <Wire>
        {new Array(lightCount).fill(0).map(() => (
          <Bulb key={Math.random()} />
        ))}
      </Wire>
    );
  }

  return null;
};

export default ChristmasLights;
