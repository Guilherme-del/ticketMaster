import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/event/countByCity?cities=campinas,saopaulo,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Carregando! Um instante"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.campinas.sp.gov.br/uploads/fotos/45612779025d9b9ab644a8d3ab0b0535.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Campinas</h1>
              <h2>{data[0]} eventos</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://boraclub.com.br/wp-content/uploads/2021/10/cidade-de-sao-paulo.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>São Paulo</h1>
              <h2>{data[1]} eventos</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://reporterbetoribeiro.com.br/wp-content/uploads/2018/09/9.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Araras</h1>
              <h2>{data[2]} eventos</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
