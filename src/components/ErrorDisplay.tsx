import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface ErrorProps {
  msg: string;
}

const ErrorDisplay = ({ msg }: ErrorProps & RouteComponentProps) => {
  const err: string = msg
    ? msg
    : 'Oops something went wrong! Path not found: 404!';
  return (
    <section>
      <h3>{err}</h3>
    </section>
  );
};

export default ErrorDisplay;
