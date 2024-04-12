import React from 'react'

export const RenderParagraphs = (str: string, separator: string) => {
  const lines = str.split(separator);

  return lines.map((line, index) => (
    <p key={index}>{line}</p>
  ));
};
