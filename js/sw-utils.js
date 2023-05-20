// Auxilar del SERVICE WORKET

// Guardar en el cache dinamico

let actualizarCacheDinamico = ( dynamicCache, req, res ) => {
    
    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );
            return res.clone();

        });

    }else{
        return res;
    }
}