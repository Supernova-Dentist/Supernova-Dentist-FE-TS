'use client';

import { Slider } from '../ui/slider';
import { cn } from '../../lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Card } from '../ui/card';

type SliderDemoProps = {
  className?: string;
  beforeImageSrc: string;
  beforeImageAlt: string;
  afterImageSrc: string;
  afterImageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export function SliderWithImageComparison({
  className,
  beforeImageSrc,
  beforeImageAlt,
  afterImageSrc,
  afterImageAlt,
  imageWidth,
  imageHeight,
}: SliderDemoProps) {
  const [sliderValue, setSliderValue] = useState([50]); // Initial slider value as array

  const handleSliderChange = (newValue: number[]) => {
    setSliderValue([newValue[0]]); // Update slider value as an array with one number
  };

  return (
    <div className='flex flex-col '>
      <div>
        <Card className='p-4 relative overflow-hidden rounded-md shadow-lg'>
          <Image
            src={beforeImageSrc}
            alt={beforeImageAlt}
            layout='responsive'
            width={imageWidth}
            height={imageHeight}
            className='rounded-md'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center'>
            <div
              className='absolute top-0 left-0 w-full h-full'
              style={{ clipPath: `inset(0 ${100 - Number(sliderValue[0])}% 0 0)` }}
            >
              <Image
                src={afterImageSrc}
                alt={afterImageAlt}
                layout='responsive'
                width={imageWidth}
                height={imageHeight}
                className='rounded-md'
              />
            </div>
          </div>
        </Card>
      </div>

      <div className='flex items-center justify-center mt-4'>
        <Slider
          className={cn('w-[60%]', className)}
          step={1}
          defaultValue={sliderValue}
          onValueChange={handleSliderChange}
        />
      </div>
    </div>
  );
}
