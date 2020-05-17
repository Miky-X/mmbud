import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/bg02.jpg';
import Sidebar from '../components/Sidebar';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="main">
      <div className="inner">
            <span className="image main">
              <a href="http://osuszanie-poznan.pl/">
              <img src={pic1} alt="" />
              </a>
            </span>
        <div className="text">
          <p>
            Nie czekaj – zdaj się na nasz profesjonalizm i doświadczenie! Jesteśmy specjalistami w kwestii osuszania gładzi, posadzek, tynków, ścian, jak i całych domów i pomieszczeń!
          </p>
          <p>
            Usuwamy nadmiar wilgoci, przywracamy dawny stan budynków po zalaniu, a także zapobiegamy kolejnym! Stosujemy najlepsze metody, przy użyciu najlepszego sprzętu.
          </p>
          <p>
            Oferujemy również osuszacze powietrza z dowozem w formie wynajmu. Jesteśmy dostępni na terenie całego Poznania, jak i okolic – zadzwoń lub napisz do nas, a my zajmiemy się resztą!
          </p>
        </div>
      </div>
    </div>
    <div className="text2">
      <h1>
        Co oferujemy?
      </h1>
      <p>
        Nasi specjaliści doradzą, jaka ilość i rodzaj urządzenia będzie najlepsza. Dobieramy na podstawie potrzeb oraz czasu, jaki ma być poświęcony na osuszenie całego obiektu. Robimy to uprzednio przeprowadzając analizę budynku, a także wywiadu z Klientem w celu ustalenia jego oczekiwań i możliwości budżetowych. Zapewniamy również pomoc i udzielamy wskazówek dotyczących metody osuszania i dobrania parametrów wentylatora, aby cały proces był jak najbardziej skuteczny i trwały na przyszłość.
      </p>
      <p>
        Co więcej, oferujemy darmową dostawę na terenie Poznania i okolic oraz montaż i instruktaż obsługi urządzeń. Wentylatory do osuszania, jak i całe osuszacze potrafią być duże, dlatego mając na uwadze komfort i spokój zamawiającego dowozimy sprzęt samodzielnie, na adres wskazany przez Klienta. Za wszystko wystawiamy fakturę VAT.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
