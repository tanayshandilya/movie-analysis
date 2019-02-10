$(document).ready(() => {
    const api = '/public/json/movies.json';
    const app = $('#app-root');
    const loader = $('#preloader');
    const list = [];
    loader.fadeIn();
    fetch(api).then(r => r.text())
    .then(content => {
        let movies = JSON.parse(content);
        movies.forEach((item) => {
            item.genres = item.genres.split('|');
            item.plot_keywords = item.plot_keywords.split('|');
            item.genres.badge = ``;
            item.plot_keywords.badge = ``;
            for (let i = 0; i < item.genres.length; i++) {
                item.genres.badge += `<span class="badge badge-genres mx-1">${item.genres[i]}</span>`
            }
            for (let j = 0; j < item.plot_keywords.length; j++) {
                item.plot_keywords.badge += `<span class="badge badge-genres mx-1">${item.plot_keywords[j]}</span>`
            }
            app.append($(`<div class="movie-item col-md-6 mb-4">
            <div class="card shadow border-0">
             <div class="card-body text-white">
                <h3 class="mb-1">${item.movie_title}</h3>
                <div class="mb-2">
                    <span class="badge badge-genres mr-1">
                        <i class="i-sm material-icons">movie</i>
                    </span>${item.genres.badge}
                </div>
                <h6>
                    <text class="text-deemed">Language:</text> ${item.language} | 
                    <text class="text-deemed">Country:</text> ${item.country} | 
                    <text class="text-deemed">Rating:</text> ${item.content_rating} | 
                    <text class="text-deemed">Released:</text> ${item.title_year}
                </h6>
                <hr>
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td><text class="text-deemed">Director</text></td>
                            <td>${item.director_name}</td>
                        </tr>
                        <tr>
                            <td><text class="text-deemed">Budget</text></td>
                            <td>$ ${item.budget}</td>
                        </tr>
                        <tr>
                            <td><text class="text-deemed">Actor</text></td>
                            <td>${item.actor_1_name}</td>
                        </tr>
                        <tr>
                            <td><text class="text-deemed">Co Actor</text></td>
                            <td>${item.actor_2_name}</td>
                        </tr>
                    </tbody>
                </table>
                <a href="${item.movie_imdb_link}" target="_blank" class="btn btn-block btn-sm btn-outline-light">View on IMDB</a>
                <hr>
                ${item.plot_keywords.badge}
              </div>
             </div>
            </div>`));
        });
        loader.fadeOut();
    });
    $('#list').click(() => {
        $('.movie-item').removeClass('col-md-6');
        $('.movie-item').addClass('col-md-12');
    });
    $('#grid').click(() => {
        $('.movie-item').removeClass('col-md-12');
        $('.movie-item').addClass('col-md-6');
    });
});