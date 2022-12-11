import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Cidades</li>
          <li className="fListItem">Regiões</li>
          <li className="fListItem">Distritos</li>
          <li className="fListItem">Aeroportos</li>
          <li className="fListItem">Eventos</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Eventos</li>
          <li className="fListItem">Festas universitarias</li>
          <li className="fListItem">Festas empresariais </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Lugares interessantes </li>
          <li className="fListItem">Festas tipicas </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Voos</li>
          <li className="fListItem">Restaurantes</li>
          <li className="fListItem">Empresas de viangens</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Serviço de clientes</li>
          <li className="fListItem">Carreiras</li>
          <li className="fListItem">Sustentabilidade</li>
          <li className="fListItem">Segurança</li>
          <li className="fListItem">Investidores</li>
          <li className="fListItem">Termos de serviço</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 MbLabsTickets.</div>
    </div>
  );
};

export default Footer;
