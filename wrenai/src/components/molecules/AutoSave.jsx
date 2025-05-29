import { useEffect } from 'react';

export default function AutoSave({ data }) {
  useEffect(() => {
    localStorage.setItem('contactFormDraft', JSON.stringify(data));
  }, [data]);
  return null;
} 