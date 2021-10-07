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
