import { Injectable } from '@angular/core';


@Injectable()
export class CommonMethodsService {
    private url: string = 'mock/mediaLibraries';


    public getRotate(array, n) { return array.slice(n, array.length).concat(array.slice(0, n)); }

    public getDeDuplicate(arg) {
        return arg.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, [])};





        //  getLeastCommonMultiple(min, max) { return new String().leastCommonMultiple(min, max); }
        //  getLeastCommonMultipleByArray(array) { return new String().leastCommonMultipleByArray(array); }
        //  find_char_NN(s1, s2) { return new String().find_char_NN(s1, s2); }
        //  find_char_N(s1, s2) { return new String().find_char_N(s1, s2); }



    }
