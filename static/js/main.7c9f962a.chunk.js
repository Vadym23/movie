(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(7),o=a.n(i),s=a(8),l=a(1),r=a(2),m=a(4),v=a(3),u=a(5),d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).state={willWatch:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,c=t.removeMovie,i=t.addMovieToWillWatch,o=t.removeMovieFromWillWatch;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},a.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),o(a)}},"Remove Will Watch"):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),i(a)}},"Add Will Watch")),n.a.createElement("button",{onClick:c.bind(null,a)},"Delete movie")))}}]),t}(n.a.Component),h=function(e){var t=e.sort_by,a=e.updateSortBy,c=function(e){return function(t){a(e)}},i=function(e){return"nav-link ".concat(t===e?"active":"")};return n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("popularity.desc"),onClick:c("popularity.desc")},"Popularity desk")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("revenue.desk"),onClick:c("revenue.desk")},"Revenue desk")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("vote_average.desk"),onClick:c("vote_average.desc")},"Vote avetage desk")))},b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.getMovies=function(){fetch("".concat("https://api.themoviedb.org/3/","discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"revenue.desc"},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-12"},n.a.createElement(h,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),n.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return n.a.createElement("div",{className:"col-md-6 mb-4",key:t.id},n.a.createElement(d,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))})))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length))))}}]),t}(n.a.Component);o.a.render(n.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.7c9f962a.chunk.js.map