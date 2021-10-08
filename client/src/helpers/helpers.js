export function compareAZ(a,b){
   
        if ( a.nombre < b.nombre ){
          return -1;
        }
        if ( a.nombre > b.nombre ){
          return 1;
        }
        return 0;
}
export function compareZA(a,b){
   
    if ( a.nombre < b.nombre ){
      return 1;
    }
    if ( a.nombre > b.nombre ){
      return -1;
    }
    return 0;
}
export function compareCONT(a,b){
   
  if ( a.continente > b.continente ){
    return 1;
  }
  if ( a.continente < b.continente ){
    return -1;
  }
  return 0;
}
export function compareACT(a,b) {
  if ( a.activities[0].nombre > b.activities[0].nombre ){
    return 1;
  }
  if ( a.activities[0].nombre < b.activities[0].nombre ){
    return -1;
  }
  return 0;
}
