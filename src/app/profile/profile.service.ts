import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

    movies: any;
    constructor() {
        if(localStorage.getItem('movies') == null)
        {
            this.movies = {};
            localStorage.setItem('movies', JSON.stringify(this.movies));
        }
        else{
            this.movies = localStorage.getItem('movies');
        }

    }

    addMovies(data) {
        console.log("dta", data);
        console.log("dta", this.movies);
        if(!this.getProperty(data.show.id)){
            this.movies[data.show.id] = data.show;
            localStorage.setItem('movies', JSON.stringify(this.movies));
        }
    }

    deleteMovies(id) {
        if(this.getProperty(id) != 'undefined'){
            console.log("2", id);
            delete this.movies[id];
        }
    }

    getProperty = function (propertyName) {
        console.log(this.movies[propertyName]);
        return this.movies[propertyName];
    };
}