// Filter Function
// Always return a boolean expression

const students:number[] = [21, 18, 15, 12, 20,9]

console.log(students.filter( function (s){
    return s>=18
}))

const songs = [
    {
        song: 'Chand Sifarish',
        singer: 'Shaan',
        year: 2001
    },
    {
        song:'Ae mere vatan',
        singer: 'Lata Mangeshkar',
        year: 1998
    },
    {
        song: 'Chaar Kadam',
        singer: 'Shaan',
        year: 2016
    },
]


//Filtered the array based on the singer to get the required array
const filteredSongs = songs.filter((song)=> song.singer === 'Shaan')

console.log('Songs sung by Shaan filtered:', filteredSongs)

//Output
// 0: {song: 'Chand Sifarish', singer: 'Shaan', year: 2001}
// 1: {song: 'Chaar Kadam', singer: 'Shaan', year: 2016}


//Filtered the array and mapped to get the required items in the form of array from the original array
const filteredMappedSongs = songs.filter((song)=> song.singer === 'Shaan').map((song) => ({song: song.song, year: song.year}))

console.log('Songs sung by Shaan filtered & mapped:', filteredMappedSongs)

//Output
// 0: {song: 'Chand Sifarish', year: 2001}
// 1: {song: 'Chaar Kadam', year: 2016}