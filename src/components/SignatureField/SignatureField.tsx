'use client';

import { useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

import { Button } from '@/components/ui/button';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface SignatureFieldProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export default function SignatureField({
  label = 'Signature',
  value,
  onChange,
  error,
  disabled = false,
}: SignatureFieldProps) {
  const signatureRef = useRef<SignatureCanvas | null>(null);
  const signatureContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSignatureEnd = () => {
    if (disabled) return;

    const canvas = signatureRef.current?.getCanvas();

    if (canvas === undefined) return;

    const signature = canvas.toDataURL('image/png');

    onChange(signature);
  };

  const handleClear = () => {
    if (disabled) return;

    signatureRef.current?.clear();
    onChange('');
  };

  useEffect(() => {
    const signature = signatureRef.current;
    const canvas = signatureContainerRef.current?.querySelector('canvas');

    if ((value === undefined || value === '') && signature !== null && canvas?.isConnected === true) signature.clear();
  }, [value]);

  useEffect(() => {
    const container = signatureContainerRef.current;

    if (container === null) return;

    let isActive = true;

    const resizeCanvas = () => {
      const signature = signatureRef.current;
      const canvas = container.querySelector('canvas');

      if (!isActive || !container.isConnected || signature === null || canvas === null) return;

      const width = Math.round(container.getBoundingClientRect().width);
      const height = 192;
      const pixelRatio = Math.max(window.devicePixelRatio ?? 1, 1);
      const bitmapWidth = Math.round(width * pixelRatio);
      const bitmapHeight = Math.round(height * pixelRatio);

      if (width === 0 || (canvas.width === bitmapWidth && canvas.height === bitmapHeight)) return;

      const signatureData = signature.toData();
      canvas.width = bitmapWidth;
      canvas.height = bitmapHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.getContext('2d')?.scale(pixelRatio, pixelRatio);
      signature.clear();

      if (signatureData.length > 0) {
        signature.fromData(signatureData);
      }
    };

    const animationFrame = window.requestAnimationFrame(resizeCanvas);
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    return () => {
      isActive = false;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const signature = signatureRef.current;
    const canvas = signatureContainerRef.current?.querySelector('canvas');

    if (signature === null || canvas?.isConnected !== true) return;

    if (disabled) {
      signature.off();
    } else {
      signature.on();
    }
  }, [disabled]);

  return (
    <FormItem className='w-full space-y-3 md:col-span-2'>
      <FormLabel className='text-sm font-semibold'>{label}</FormLabel>

      <FormControl>
        <div className='space-y-3'>
          <div
            ref={signatureContainerRef}
            className={`w-full overflow-hidden rounded-xl border-2 bg-white shadow-inner transition-colors ${
              error !== undefined && error !== ''
                ? 'border-destructive'
                : disabled
                  ? 'border-muted-foreground/30'
                  : 'border-foreground/60 focus-within:border-primary'
            }`}
          >
            <SignatureCanvas
              ref={signatureRef}
              penColor='black'
              clearOnResize={false}
              canvasProps={{
                className: `block h-48 w-full touch-none ${
                  disabled ? 'pointer-events-none cursor-not-allowed bg-muted/30 opacity-70' : 'cursor-crosshair'
                }`,
                'aria-disabled': disabled,
                'aria-label': `${label} drawing area`,
              }}
              onEnd={handleSignatureEnd}
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <p className='text-xs text-muted-foreground'>Sign above using your finger, mouse or stylus.</p>

            <Button type='button' variant='outline' size='sm' onClick={handleClear} disabled={disabled}>
              Clear
            </Button>
          </div>
        </div>
      </FormControl>

      {error !== undefined && error !== '' && <FormMessage>{error}</FormMessage>}
    </FormItem>
  );
}
