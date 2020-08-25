import React from 'react';
import { RouteComponentProps } from '@reach/router';

const ErrorDisplay = (_: RouteComponentProps) => {
  const err: string = 'Oops something went wrong! Path not found: 404';
  return (
    <section>
      <h3>{err}</h3>
    </section>
  );
};

export default ErrorDisplay;
