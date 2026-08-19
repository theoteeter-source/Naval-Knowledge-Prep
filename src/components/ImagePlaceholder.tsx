import React from 'react';
import { LessonImage } from './LessonImage';

interface ImagePlaceholderProps {
  description: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ description }) => {
  return <LessonImage description={description} />;
};
