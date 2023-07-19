import { getDOMAIN } from '@/api/index.js'
export function CATEID(idname) {
  // dev & localhost
  /**
   * "Foods" = cata_id: "2238"
   * "Souvenirs" = cata_id: "2239"
   * "Tickets" = cata_id: "2252"
   * "Traffic" = cata_id: "2253"
   **/

	
  const devregex = /^dev-/g
  const qaregex = /^qa-/g

  let part1 = getDOMAIN()
  let CATEID
  if (part1 === 'localhost' || part1 === '127') {
    // localhost
    switch (idname) {
      case 'Foods':
        CATEID = '2238'
        break;
				case 'Souvenirs':
        CATEID = '2239'
        break;
				case 'Tickets':
        CATEID = '2252'
        break;
				case 'Traffic':
        CATEID = '2253'
        break;
    }
  } else if (devregex.test(part1)) {
    // dev
		switch (idname) {
      case 'Foods':
        CATEID = '2238'
        break;
				case 'Souvenirs':
        CATEID = '2239'
        break;
				case 'Tickets':
        CATEID = '2252'
        break;
				case 'Traffic':
        CATEID = '2253'
        break;
    }
  } else if (qaregex.test(part1)) {
    // qa
		switch (idname) {
      case 'Foods':
        CATEID = '2238'
        break;
				case 'Souvenirs':
        CATEID = '2239'
        break;
				case 'Tickets':
        CATEID = '2252'
        break;
				case 'Traffic':
        CATEID = '2253'
        break;
    }
  } else {
    // final
		switch (idname) {
      case 'Foods':
        CATEID = '2238'
        break;
				case 'Souvenirs':
        CATEID = '2239'
        break;
				case 'Tickets':
        CATEID = '2252'
        break;
				case 'Traffic':
        CATEID = '2253'
        break;
    }
  }
  return CATEID
}
