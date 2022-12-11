import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const convertToSlug = (text) => {
    const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return text.toString().toLowerCase().trim()
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[\s\W-]+/g, '') // Replace spaces, non-word characters and dashes with a single dash ()
  }

  const { data, loading, error, reFetch } = useFetch(
    destination == ""
      ? `/event?min=${min || 0}&max=${max || 999}`
      : `/event?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Pesquisar</h1>
            <div className="lsItem">
              <label>Destino</label>
              <input placeholder={destination} type="text" onChange = {(e) => {setDestination(convertToSlug(e.target.value))}} />
            </div>
            <div className="lsItem">
              <label>Data do evento</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Opções</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Preço minimo</span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Preço maximo</span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button onClick={() => handleClick()}>Pesquisar</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Carregando"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
