'use client';

import { IconTrash, IconUpload } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const FileUpload = ({ files, onChange }: { files: File[]; onChange?: (files: File[]) => void }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const limited = newFiles.slice(0, 1);
    onChange?.(limited);
    setErrorMessage(null);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    onChange?.(updatedFiles);
  };

  const { getRootProps, isDragActive, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    onDrop: handleFileChange,
    onDropRejected: (rejected) => {
      setErrorMessage('Only JPG and PDF files are allowed. Max 1 file.');
      console.warn('Rejected files:', rejected);
    },
    noClick: true,
  });

  const handleClick = () => fileInputRef.current?.click();

  return (
    <div className='w-full space-y-2'>
      <div {...getRootProps()} className='w-full'>
        <motion.div
          onClick={handleClick}
          whileHover={{ scale: 1.02 }}
          className={`
            p-8 border-2 border-dashed rounded-lg cursor-pointer text-center transition
            ${
              isDragActive
                ? 'border-blue-500 bg-blue-50 dark:bg-neutral-800'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900'
            }
          `}
        >
          <input
            {...getInputProps()}
            ref={fileInputRef}
            onChange={(e) => handleFileChange(Array.from(e.target.files ?? []).slice(0, 3))}
            className='hidden'
          />
          <IconUpload className='mx-auto h-6 w-6 text-gray-500 dark:text-gray-400 mb-2' />
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            Drag & drop files here or <span className='underline'>click to upload</span>
          </p>
          <p className='text-xs text-gray-400 dark:text-gray-500 mt-1'>
            Accepted: .jpg, .jpeg, .pdf &middot; Max 1 file
          </p>
        </motion.div>
      </div>

      {errorMessage && <p className='text-sm text-red-600 dark:text-red-400'>{errorMessage}</p>}

      {files.length > 0 && (
        <ul className='space-y-2'>
          {files.map((file, idx) => (
            <li
              key={idx}
              className='p-3 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-sm text-gray-800 dark:text-gray-200 flex justify-between items-center'
            >
              <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 truncate max-w-[70%]'>
                <span className='truncate'>{file.name}</span>
                <span className='text-xs text-gray-500 dark:text-gray-400'>{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <button
                onClick={() => handleRemoveFile(idx)}
                className='text-red-500 hover:text-red-700 transition'
                aria-label='Remove file'
              >
                <IconTrash size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
