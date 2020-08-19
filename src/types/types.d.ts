type IncidentLocationStreet = {
  id: number;
  name: string;
};

type IncidentLocation = {
  latitude: string;
  longitude: string;
  street: IncidentLocationStreet;
};

type IncidentOutcomeStatus = {
  category: string;
  date: string;
};

type Incident = {
  category: string;
  location_type: string;
  location: IncidentLocation;
  context: string;
  outcome_status: IncidentOutcomeStatus | null;
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
};

type CrimeListState = {
  crime: Incident[];
  isLoading: boolean;
  mapCoords: string;
  err: string;
};

type CrimeCategoryLookupObject = {
  [key: string]: number;
};

type CrimeOutcomeLookupObject = {
  [key: string]: number;
};

type CrimeListProps = {
  boroughName?: string;
  startDate: Date;
};

type CrimeCardProps = {
  incident: Incident;
};

type CrimeChartProps = {
  crime: Incident[];
  startDate: Date;
};

type NeighbourhoodCoords = {
  latitude: string;
  longitude: string;
};

type AreaCoords = {
  [key: string]: number[][];
};
