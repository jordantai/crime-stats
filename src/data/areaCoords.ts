import { buryAreaCoords } from './buryAreaCoords';
import { stockportAreaCoords } from './stockportAreaCoords';
import { traffordAreaCoords } from './traffordAreaCoords';
import { boltonAreaCoords } from './boltonAreaCoords';
import { oldhamAreaCoords } from './oldhamAreaCoords';
import { tamesideAreaCoords } from './tamesideAreaCoords';
import { cityAreaCoords } from './cityAreaCoords';

export const areaCoords: AreaCoords = {
  bury: [...buryAreaCoords],
  stockport: [...stockportAreaCoords],
  trafford: [...traffordAreaCoords],
  bolton: [...boltonAreaCoords],
  oldham: [...oldhamAreaCoords],
  tameside: [...tamesideAreaCoords],
  city: [...cityAreaCoords],
};
