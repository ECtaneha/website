import React from 'react'

export const RenderParagraphs = (str: string, separator: string) => {
  if (typeof str !== 'string' || typeof separator !== 'string') {
    return [];
  }  const lines = str.split(separator);

  return lines.map((line, index) => (
    <p key={index}>{line}</p>
  ));
};
