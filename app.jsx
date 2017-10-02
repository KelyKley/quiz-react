let players = [
  {
    imagen: "plane.png",
    pregunta: "¿Cuál es la aerolínea más antigua del mundo?",
    respuestas: ["Avianca", "KLM", "Qantas"],
    correcta: "KLM"
  },
  {
    imagen: "ship.png",
    pregunta: "¿Cuál es el puerto más grande del mundo?",
    respuestas: ["Puerto de Shanghai", "Puerto de Singapur", "Puerto de Rotterdam"],
    correcta: "Puerto de Shanghai"
  },
  {
    imagen: "bycicle.png",
    pregunta: "¿Cuál es la distancia más larga en bicicleta hacia atrás?",
    respuestas: ["89,30 km", "675,10 km", "337,60 km"],
    correcta: "337,60 km"
  },
  {
    imagen: "truck.png",
    pregunta: "¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?",
    respuestas: ["590 km/h", "320 km/h", "245 km/h"],
    correcta: "590 km/h"
  },
  {
    imagen: "car.png",
    pregunta: "¿Cuál es el viaje más largo en un tanque de gas?",
    respuestas: ["2617 km", "3568 km", "1732 km"],
    correcta: "2617 km"
  }
];

const Header = () => {
  return (
    <div className="header">
      <div className="stopwatch">
        <h2>QUIZ</h2>
      </div>
    </div>
  );
};

const PlayerList = ({ players }) => {
  return (
    <div className="borde">
      {
        players.map((item, index) => {
          return (
            <div key={index} className="player">
              <div><img src={item.imagen} alt=""/></div>
              <div className="player-name">{item.pregunta}</div>
              <div className="player-score flex stopwatch">
                <button className="counter-score" onclick={evalua}>{item.respuestas[0]}</button>
                <button className="counter-score">{item.respuestas[1]}</button>
                <button className="counter-score">{item.respuestas[2]}</button>
              </div>
            </div>);
        })
      }
    </div>);
};

function evalua(e){
  e.preventDefault();
  console.log('The link was clicked.');
}
const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
      <input className="text-center text-upper" type="text" placeholder="Haz finalizado el quiz" disabled />
      <input type="submit" value="Ver resultados" />
      </form>
    </div>
  );
};

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
};

ReactDOM.render(
  <Application title="Scoreboard" players={players} />,
  document.getElementById("container")
);


























/*
"use strict";

const API_KEY = "AIzaSyB6RQPxv-X6aojxx9IKh0Nc4twyqlMnitI";

class Youtube extends React.Component {
   constructor (props) {
      super(props);

      this.state = {
         videos : [],
         searchTerm : 'laboratoria',
         selectedVideo : null
      }
      this.youtubeSearch(this.state.searchTerm);
   }

   youtubeSearch(searchTerm) {
      console.log(searchTerm);

      YTSearch({ key: API_KEY, term: searchTerm }, data => {
         console.log("result", data);
         
         this.setState ({
            videos : data,
            searchTerm : searchTerm,
            selectedVideo : data[0]
         });
      });
   }

   onClick (e, index) {
      console.log ("video Click!", index);
      
      this.setState ({
         videos : this.state.videos,
         searchTerm : this.state.searchTerm,
         selectedVideo : this.state.videos[index]
      });    
   }
   getVideoList(videos) {
      return videos.map((video, index) => {
         const imageUrl = video.snippet.thumbnails.default.url;
         const url = `https://www.youtube.com/embed/${video.id.videoId}`;
         return <li key = {index}>
                     <img class="media-object" src={imageUrl} onClick= { (e) => this.onClick (e, index) }/>                  
               </li>
      });
   }
   onSubmit (e) {
      e.preventDefault();
      console.log (this.state.searchTerm);
      this.youtubeSearch(this.state.searchTerm);
   }
   onChange (e) {
      this.setState ({
         videos : this.state.videos,
         searchTerm : e.target.value,
         selectedVideo : this.state.selectedVideo
      });      
   }
   render () {       
      if (!this.state.selectedVideo)
         return <div> loading ... </div>;

      const url = `https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}`;
      return (
         <div>
         <form onSubmit={(e) => this.onSubmit(e)}>
            <input value = {this.state.searchTerm}  onChange= {(e) => this.onChange(e)} />
            <button type="submit">
               Go
            </button>
         </form>
         <div>
            <iframe class="embed-responsive-item" src={url}> </iframe>
         </div>
         <ol>
            {this.getVideoList(this.state.videos)}
         </ol>
         </div>
      );
   }
}

ReactDOM.render(<Youtube />, document.getElementById("container"));
*/