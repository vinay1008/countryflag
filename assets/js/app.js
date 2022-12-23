var cl = console.log;

// cl(movieArr);


// let imdv = document.getElementById('imdv');

// // https://image.tmdb.org/t/p/w1280/5Y0Ut7LMDa60cUMwwsk1p24lnox.jpg
// let result = ``;
// movieArr.forEach(function(ele) {
//     result += `  <div class="col-lg-3 col-md-6 col-xs-12">
//                     <div class="card mb-4">
//                         <figure class="moviecard">
//                             <img class="img-fluid" alt="" src=${"https://image.tmdb.org/t/p/w1280"}${ele.poster_path}>
//                             <figcaption>
//                                 <div class="row" >
//                                     <div class="col-sm-9">
//                                         <h6>
//                                             ${ele. title}
//                                         </h6>
//                                     </div>
//                                     <div class="col-sm-3">
//                                         ${ele.vote_average}
//                                     </div>
//                                     <div class="overview">
//                                         <h4>Overview</h4>
//                                         <p>
//                                             ${ele.overview}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </figcaption>
//                         </figure>
//                     </div>
//                 </div>`
//     imdv.innerHTML = result;

// });

cl(countries);


const countryflag = document.getElementById('countryflag');

let result = ``;

countries.forEach(function (ele) {
    result += ` <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="card mb-4">
                            <div class="card-img mt-4">
                                <img class="img-fluid" src="${ele.flag}" alt="">
                            </div>
                            <div class="card-body">
                                <h3 class="text-center text-warning">
                                ${ele.name}
                                </h3>
                                <h4> Capital : ${ele.capital}</h4>
                                <h4>Language : ${ele.languages[0]}</h4>
                                <h4>Population : ${ele.population}</h4>
                            </div>
                        </div>
                </div>`

    countryflag.innerHTML = result;
})