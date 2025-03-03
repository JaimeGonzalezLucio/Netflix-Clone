import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

    const clonedRequest = req.clone({
      setHeaders: {
        accept: 'application/json',        
        //Authorization: 'Bearer {{token}}'
      }
    });
    
    //Agrega tu API KEY de The Movie Database

    // https://www.themoviedb.org/login?to=read_me&redirect=%2Freference%2Fintro%2Fgetting-started
    // https://www.themoviedb.org/documentation/api


    return next(clonedRequest);  
  
};
