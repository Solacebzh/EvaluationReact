import './Serie.css'
import FavButton from './FavButton';
 export default function Serie(props) {
   const { serie } = props;
   const tags = serie.genres.map(genre => <span key={genre} className="genre">{genre}</span>);
   
   return (
     <div className="color">
       
       <section className="">
         <div className="banniere">
        <img src={serie.images.banner} className="" alt="banniere"></img>
        <h1>
          {serie.title} ({serie.creation})
        </h1>
        </div>
       <div><img src={serie.images.poster} alt="poster"></img></div>
       <div><p>{serie.description}</p></div>
       <div>
         <div>
           {tags}
           <FavButton titleserie ={serie.title} favoris ={serie.user.favorited} id={serie.id}/>
           <div>  
           </div>
         </div>
       </div>
       </section>
     </div>
   );
 }
 