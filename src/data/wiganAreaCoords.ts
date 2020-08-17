import { formatNumberCoords } from '../utils/functions';
const wigan = [
  53.60336803098691,
  -2.6884690088867114,
  53.5895129377421,
  -2.693275527441399,
  53.59073562874639,
  -2.698768691503899,
  53.58727124568256,
  -2.7022019190429614,
  53.5758571515015,
  -2.71971137949218,
  53.5630126112447,
  -2.705635146582024,
  53.54404449237316,
  -2.717994765722649,
  53.537923930419915,
  -2.71421821542968,
  53.52506786976012,
  -2.7190247339843676,
  53.51894456429534,
  -2.73344428964843,
  53.510778780141464,
  -2.723487929785149,
  53.513841133608466,
  -2.709755019628899,
  53.504379750548104,
  -2.7058616753701115,
  53.49927456565413,
  -2.6663795586708927,
  53.493556028683436,
  -2.664319622147455,
  53.49273903187246,
  -2.6567665215615177,
  53.48048219084069,
  -2.6447074565747175,
  53.48109511700962,
  -2.61243511770753,
  53.47087852477287,
  -2.6093452129223738,
  53.470265451015386,
  -2.6144950542309675,
  53.46290787515507,
  -2.6155250224926863,
  53.460863877753845,
  -2.59870220755128,
  53.456775587725666,
  -2.59595562552003,
  53.45616231026965,
  -2.5880592021801863,
  53.447166556630094,
  -2.578102842316905,
  53.458002116066424,
  -2.5695197734692488,
  53.4618858887553,
  -2.54926373098878,
  53.4674043230526,
  -2.55201031302003,
  53.47985365929091,
  -2.4962721268793153,
  53.474745521184914,
  -2.4894056718011903,
  53.46064386901461,
  -2.489062349047284,
  53.466652670549244,
  -2.434959238784542,
  53.48197816240425,
  -2.4380491435696983,
  53.49096654182851,
  -2.4328993022611045,
  53.493826081319554,
  -2.437705820815792,
  53.4985234776218,
  -2.4325559795071983,
  53.50076987451147,
  -2.433585947768917,
  53.50240354294556,
  -2.4291227519681358,
  53.5048526749279,
  -2.428535101303766,
  53.507098736462964,
  -2.419265386948297,
  53.51125792451153,
  -2.418171731846517,
  53.513911946961755,
  -2.411648599522298,
  53.521056565874396,
  -2.426411477940267,
  53.52544603279993,
  -2.4535463589283424,
  53.52809916661548,
  -2.4521730679127174,
  53.53503734627607,
  -2.489938570842405,
  53.53748584417281,
  -2.4919985073658424,
  53.5389140692246,
  -2.5060747402759986,
  53.53442519967774,
  -2.509507967815061,
  53.53646565392334,
  -2.5129411953541236,
  53.53524139317556,
  -2.5156877773853736,
  53.52932363386241,
  -2.51603110013928,
  53.52360915049426,
  -2.528390719279905,
  53.52381325246186,
  -2.533883883342405,
  53.537893913389674,
  -2.555555358858572,
  53.53809794652316,
  -2.5613918456749785,
  53.54564648124424,
  -2.559331909151541,
  53.54809436560463,
  -2.566198364229666,
  53.55604901204021,
  -2.559675231905447,
  53.56012773788024,
  -2.562421813936697,
  53.56094343586201,
  -2.559331909151541,
  53.56359434567898,
  -2.561048522921072,
  53.56542949361974,
  -2.5672283324913847,
  53.570934459720384,
  -2.5655117187218535,
  53.57684640295696,
  -2.5782146606163847,
  53.58071929689078,
  -2.5819912109093535,
  53.58846402038186,
  -2.596754089327322,
  53.59056459553741,
  -2.6207341097818015,
  53.5899532519831,
  -2.6272572421060203,
  53.59402870861896,
  -2.625540628336489,
  53.59830751504475,
  -2.627943887613833,
  53.60429933218726,
  -2.631996341087184,
  53.60715122447743,
  -2.6316530183332776,
  53.60240765006884,
  -2.659374368102192,
];

export const wiganAreaCoords = formatNumberCoords(wigan);