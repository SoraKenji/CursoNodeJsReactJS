const vowelFinder = (s) => {
    return s.replace(new RegExp("[^aeiou]","gi"),'');
}

const vowelMayFinder= (s) => {
    return s.replace(new RegExp("[^AEIOU]","g"),'');
}

const vowelMinFinder= (s) => {
    return s.replace(new RegExp("[^aeiou]","g"),'');
}

const spaceFinder = (s) => {
    return (s.match(/ /g)||[]);
}

const consonantesFinder = (s) => {
    return s.replace (new RegExp("[^BCDFGHJKLMNPQRSTVWXYZ]","gi"),'');
}

const consonantesMinFinder = (s) => {
    return s.replace (new RegExp("[bcdfghjklmnpqrstvwxyz]","g"),'');
}

const consonantesMayFinder = (s) => {
    return s.replace (new RegExp("[^BCDFGHJKLMNPQRSTVWXYZ]","g"),'');
}

exports.vowelFinder = vowelFinder;
exports.vowelMayFinder = vowelMayFinder;
exports.consonantesMayFinder = consonantesMayFinder;
exports.vowelMinFinder = vowelMinFinder;
exports.spaceFinder = spaceFinder;
exports.consonantesFinder = consonantesFinder;
exports.consonantesMinFinder = consonantesMinFinder;