import { Injectable } from '@angular/core';


@Injectable()
export class CommonMethodsService {
    private url: string = 'mock/mediaLibraries';


    public getRotate(array, n) { return array.slice(n, array.length).concat(array.slice(0, n)); }

    public getDeDuplicate(arg) {
        return arg.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, [])
    };

    public find_char_NN(string1, string2) {
        var hit_map = {}, // object with all matching chars as keys
            result = "";
        for (var i = 0, len1 = string1.length; i < len1; i++) {
            var char1 = string1[i];
            for (var j = 0, len2 = string2.length; j < len2; j++) {
                var char2 = string2[j];
                if (char1 == char2 && hit_map[char1] == undefined) {
                    hit_map[char1] = "hit";
                    result += char1;
                }
            }
        }
        return result;
    };

    public find_char_N(string1, string2) {
        var result = "",
            chars1 = {}, // characters in the first string
            chars2 = {}; // characters in the second string
        for (var j = 0, len2 = string2.length; j < len2; j++) {
            chars2[string2[j]] = true;
        }
        for (var i = 0, len1 = string1.length; i < len1; i++) {
            var char1 = string1[i];
            if (chars2[char1] && chars1[char1] == undefined) {
                chars1[char1] = "hit";
                result += char1;
            }
        }
        return result;
    };

    public leastCommonMultiple(min, max) {
        function range(min, max) {
            var arr = [];
            for (var i = min; i <= max; i++) {
                arr.push(i);
            }
            console.dir(arr)
            return arr;
        }


        function gcd(a, b) {
            return !b ? a : gcd(b, a % b);
        }

        function lcm(a, b) {
            return (a * b) / gcd(a, b);
        }

        var multiple = min;

        range(min, max).forEach(function (n) {
            multiple = lcm(multiple, n);

        });

        return multiple;
    };

    public leastCommonMultipleByArray(array) {
        function leastCommonMultipleArray(array) {

            function rangeX(array) {
                var arr = [];
                for (var i = 0; i < array.length; i++) {
                    arr.push(array[i]);
                }
                console.dir(arr)
                return arr;
            }

            function gcd(a, b) {
                return !b ? a : gcd(b, a % b);
            }

            function lcm(a, b) {
                return (a * b) / gcd(a, b);
            }

            var multiple = array[0];
            rangeX(array).forEach(function (n) {
                multiple = lcm(multiple, n);

            });

            return multiple;
        }
        return leastCommonMultipleArray(array);

    };


}
