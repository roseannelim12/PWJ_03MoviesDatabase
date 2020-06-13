// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]


let numbers = [];

window.onload = () => {
    // getMoviesList(movies);
    sortingByAttr(movies, 'rank');
}

sortAttr = () => {
    let attr = document.getElementById("sort-filter").value;
    console.log(attr);
    if(attr == "default") {
        getMoviesList(movies);
    } else {
        sortingByAttr(movies, attr);
    }
}

getMoviesList = (movies) => {
    let table = `
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Rank</th>
            </tr>
        `;

    // console.log(movies);
    for(i = 0; i < movies.length; i++) {
        // console.log("index: ", i);
        // console.log("m: ", movies[i].title); 
        table += `
            <tr>
                <td>${movies[i].id}</td>
                <td>${movies[i].title}</td>
                <td>${movies[i].rank}</td>
            </tr>
        `;       
    }
    table += `</table>`;
    document.querySelector('.movies-list-container').innerHTML = table;
}

sortingByAttr = (movies, attr) => {
    // numbers = [2,8,6,3,9];
    // console.log("orig: ", numbers);
    let temp;

    for(let i = 0; i < movies.length - 1; i++) {
        for(let j = i+1; j < movies.length; j++) {
            if(movies[i][attr] < movies[j][attr]) {
                temp = movies[i];
                movies[i] = movies[j];
                movies[j] = temp;
            }
            // console.log(movies);
        } 
    }
    getMoviesList(movies);
}

// sortingDefault = (movies) => {
//     // numbers = [2,8,6,3,9];
//     // console.log("orig: ", numbers);
//     let temp;

//     for(let i = 0; i < movies.length - 1; i++) {
//         for(let j = i+1; j < movies.length; j++) {
//             if(movies[i] < movies[j]) {
//                 temp = movies[i];
//                 movies[i] = movies[j];
//                 movies[j] = temp;
//             }
//             console.log(movies);
//         }
        
//     }
// }