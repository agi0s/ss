/*
*/

function sortTrigons(trigonsArray) {

    function heronFormula(trigon) {
        var keys = Object.keys(trigon),
            a = trigon[keys[1]],
            b = trigon[keys[2]],
            c = trigon[keys[3]],
            p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    trigonsArray.sort((a, b) => {
        return heronFormula(a) < heronFormula(b);
    });

    for (var i = 0; i < trigonsArray.length; i++) {
        trigonsArray[i] = trigonsArray[i].vertices;
    }

    return trigonsArray;
}

trigon = [{
        vertices: 'ABC',
        a: 10,
        b: 20,
        c: 22.36
    }, {
        vertices: 'DEF',
        d: 5,
        e: 5,
        f: 5
    },
    {
        vertices: 'GHI',
        g: 15,
        h: 25,
        i: 20
    },
    {
        vertices: 'KLM',
        k: 41,
        l: 51,
        m: 40
    }
];

sortTrigons(trigon);