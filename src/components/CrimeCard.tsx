import React from 'react';
import { formatMonth } from '../utils/functions';

type CrimeCardProps = {
  incident: Incident;
};

const CrimeCard = ({ incident }: CrimeCardProps) => {
  const {
    category,
    location_type,
    location,
    context,
    outcome_status,
    id,
    location_subtype,
    month,
  } = incident;

  const crimeOutcome = (
    outcome_status: IncidentOutcomeStatus | null
  ): string | null => {
    if (outcome_status !== null) {
      const outcomeStatus = outcome_status.category;
      const outcomeStatusDate = outcome_status.date;
      return outcomeStatus + ' ' + formatMonth(outcomeStatusDate);
    } else {
      return 'Unknown';
    }
  };

  return (
    <li className="incident">
      <p>category: {category}</p>
      <p>location type: {location_type}</p>
      <p>month: {formatMonth(month)}</p>
      <p>outcome: {crimeOutcome(outcome_status)}</p>
    </li>
  );
};

export default CrimeCard;
