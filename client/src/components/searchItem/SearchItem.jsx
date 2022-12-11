import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m do centro</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Taxas em caso de cancelamento * </span>
        <span className="siCancelOpSubtitle">
          Voce pode cancelar depois, então garanta este preço agora mesmo!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Nota</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Incluso taxas</span>

          <Link to={`/events/${item._id}`}>
          <button className="siCheckButton">Carrinho</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
