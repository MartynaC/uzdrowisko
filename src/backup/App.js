//import logo from './logo.svg';
import React from 'react';
import './App.scss';
//import NavMenu from './NavMenu/NavMenu.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aku from './aku.png';
import kontakt from './kontakt.png';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
//import banki from './banki.png';
//import moxa from './moxa.png';
//import guasha from './guasha.png';
//import ziolo from './ziolo.png';
//import dieta from './dieta.png';
//import aku2 from './aku2.png';




function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container className='about-section'>
        <Row>
          <Col xs={12} md={6}>
            <h1 className='section-title'>
              <span className="g-italic">O</span>MNIE.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p><span className='italic'>Jestem pasjonatką Jogi i Medycyny Holistycznej.</span> Swoją drogę rozpoczęłąm jako pacjentka borykająca się z różnymi dolegliwościami oraz uczennica jogi poszukująca połączenia
              ze swoim ciałem oraz umysłem. Podążając za wiedzą i rozwojem, zostałam nauczycielem jogi, a także akupunkturzystką. Medycyna Chińska oraz głęboka praktyka Jogi pomogły mi poczuć,
              a potem zrozumieć swój organizm. Oba systemy są dla mnie ścieżką samorozwoju, pogłębiania świadomości, kultywowania zdrowia i poszukiwania dobrostanu psychicznego. <br></br><br></br>Wierzę,
              że zdrowie fizyczne i psychiczne są naturalnym stanem, do którego dąży każdy organizm. Naszym zadaniem jest zrozumieć jego naturę oraz wspierać go w dążeniu do właściwego optimum.</p>
          </Col>

        </Row>
      </Container>

      <Container className='medicine-section'>
        <Row>
          <Col xs={12} md={6}>
            <h1 className='section-title stacked'>
              <span className="g-italic">MEDY<br></br>CYNA</span><br></br>CHIŃ<br></br>SKA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p>Jestem absolwentką <span className='italic'></span>Trójmiejskiego Ośrodka Medycyny Orientalnej (TOMO) w specjalizacji akupunktura. Ukończyłam dodatkowe kursy i szkolenia
              (m. in. kurs dietetyki wg. 5 przemian, ziołolecznictwa,
              moxy, masażu gua sha, diagnostyki z pulsu i języka), szkolenie „Level Up - Stems and Branches”.</p>
          </Col>
        </Row>

        <Row className='joga-section'>
          <Col xs={12} md={6}>
            <h1 className='section-title'>
              JOGA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p>Jogę praktykuję od 2012 r., nauczam od 2015 r. Uważam, że Joga jest bezustannym procesem, dlatego pogłębiając swoją praktykę staram się czerpać wiedzę ze źródła - podróże do Indii.</p>
            <p><span className='border-btm'>Ukończyłam kursy:</span> <br></br>
              <span className='border-btm italic'>Międzynarodowy Kurs Nauczycielski Jogi Sivanandy (200hrs Yoga Alliance TTC) :</span> <br></br>
              <span className='border-btm italic'>Instruktor Zajęć Psychofizycznych (EFIB),</span> <br></br>
              <span className='border-btm italic'>Joga w Ciąży (Agnieszka Bera Shakti Doula Copenhagen</span> <br></br>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className='tagline-text'>
        <Row>

          <p className='tagline'>Nie praktykujemy, by rzeczy stały się doskonałe, ani by robić coś w sposób doskonały.
            W istocie praktykujemy po to, aby zrozumieć fakt, że rzeczy już są doskonałe, właśnie takie, jakie są. 
            <br></br><span className='tagline-author'>Jon Kabat-Zinn</span></p>
        </Row>
      </Container>


      <Container className='medicine-section'>
        <Row>
          <Col xs={12} md={6}>
            <h1 className='section-title stacked'>
              <span className="g-italic">MEDY<br></br>CYNA</span><br></br>CHIŃ<br></br>SKA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p><span className='g-italic'>Medycyna Chińska </span>(jeden z najstarszych systemów medycznych świata) jest skuteczną metodą profilaktyki zdrowia oraz leczenia chorób.
              Traktuje człowieka jako jedność na poziomie ciała, umysłu oraz ducha - nasze myśli, emocje i kondycja fizyczna wpływają na siebie nawzajem.
              Terapia opiera się na równoważeniu przepływu energii w ciele i narządach wewnętrznych, dzięki czemu organizm wraca do naturalnego stanu równowagi.
              Pracując z pacjentem stosuję szczegółową diagnozę opierającą się na głębokim wywiadzie, badaniu pulsu oraz oględzinach języka.
              Na tej podstawie wyznaczam ścieżkę i wskazuję odpowiednią terapię (akupunktura, moxa, bańki, masaż gua sha, wskazówki żywieniowe w oparciu o dietetykę wg.medycyny chińskiej, zioła).
              Wspólnie z pacjentem skupiamy się na znalezieniu przyczyny (korzenia) danego zaburzenia.
              Poprzez terapię i zmianę szkodliwych nawyków pracujemy nad doprowadzeniem organizmu z powrotem do naturalnego stanu równowagi.</p>
          </Col>
        </Row>
      </Container>
      <Container className='service-list-section'>
        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title stacked'>
              <span className='top-word withphoto'><img src={aku} alt="Akupunktura klasyczna" />AKUPUNKTURA.</span><br></br> <span className="g-italic">KLASY-<br></br> CZNA</span>
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p><span className='g-italic'>Skuteczna metoda leczenia rożnego rodzaju chorób i dolegliwości bólowych.</span>
              Zabieg polega na wbijaniu cieniutkich igieł w określone punkty na ciele.
              Zgodnie z tym systemem każda jednostka ma swoje mocne i słabe strony, diagnozujemy je poprzez badanie pulsu pacjenta.
              Po znalezieniu najsłabszych ogniw wzmacniamy je za pomocą odpowiednio dobranych punktów, dzięki
              czemu organizm wraca do równowagi oraz zmienia się samopoczucie fizyczne i psychiczne.
              Długość trwania leczenia: Zależy od organizmu pacjenta i zaawansowania choroby.
              W przypadku lekkich dolegliwości- od 2 do 3 miesięcy, jeśli choroba jest długotrwała i zaawansowana czas
              leczenia może wydłużać się do 2-3 lat.
              Częstotliwość zabiegów ustalamy na spotkaniu (zwykle co 2-3 tygodnie, przy długotrwałym leczeniu częstotliwość się zmniejsza).
            </p>
          </Col>
        </Row>

        <Row className='service-section' id='service'>
          <Col xs={12} md={6}>
            <h4 className='service section-title'>
              BAŃKI.
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>Jest to starodawny zabieg, polegający na wytworzeniu podciśnienia w bańce (czyli szklanym owalnym naczyniu) i przyłożeniu jej do skóry np. pleców. 
              Powstałe podciśnienie zasysa skórę i warstwę podskórną do środka naczynia, dzięki czemu dochodzi do lokalnego wynaczynienia krwi, 
              która traktowana jest przez układ odpornościowy jako obce białko, co pobudza go do działania i zwiększenia ilości przeciwciał. 
              Zabieg ten jest pomocny przy infekcjach, przeziębieniach, obniżonej odporności organizmu, problemach z górnymi drogami oddechowymi, bólu pleców, mięśni, napięciu i stresie. 
              Pomaga poruszyć zastoje Krwi i Qi.
            </p>
          </Col>
        </Row>

        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title'>
              MOXA.
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>Bazuje ona na ogrzewaniu punktów akupunkturowych specjalnym cygarem lub stożkami,
              których głównym składnikiem jest Bylica Pospolita. Podobnie jak w przypadku akupunktury,
              stymulowany jest przepływ energii w meridianach (kanałach energetycznych),
              poruszane są zastoje Qi i Krwi.Dodatkowo doprowadzamy ciepło (energię Yang) do miejsc gdzie występują jej deficyty.
            </p>
          </Col>
        </Row>

        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title'>
              GUA SHA.
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>To starożytny masaż uzdrawiający, który polega na drapaniu skóry specjalnym urządzeniem wykonanym z rogu zwierzęcia lub kamienia.
              Poruszany jest w ten sposób przepływ Qi, Krwi i Limfy.
              Zabieg ten doskonale się sprawdza w przypadku infekcji, napięć i sztywności, bóli mięśni, stawów i głowy. Stymuluje układ odpornościowy.
            </p>
          </Col>
        </Row>

        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title'>
              ZIOŁO-<br></br>LECZNICTWO.
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>Niepodważalna skuteczność tej terapii sięga korzeniami aż do starożytnośći. W terapii głównie korzystam z receptur chińskich.
              Ich opis działania jest szczegółowy pod względem smaku, termiki i oddziaływania na dolegliwości oraz konkretne układy narządów.
              Dzięki temu łatwiej, a przede wszystkim celniej jest dobrać odpowiedni zestaw zindywidualizowany do potrzeb pacjenta.
              Nierzadko terapię uzupełniamy o zioła zachodnie.</p>
          </Col>
        </Row>

        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title stacked'>
              <span className='top-word'>DIETETYKA WEDŁUG.</span><br></br>MEDYCYNY CHIŃSKIEJ
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>Jeśli pojawia się taka potrzeba, często uzupełniamy terapię o ogólne wskazówki dietetyczne.
              W podejściu Medycyny Chińskiej każdy produkt ma konkretny smak, termikę i sposób oddziaływania na organizm,
              dlatego odpowiednie odżywianie, dostosowane do Pór Roku i klimatu,
              w którym żyjemy ma ogromne znaczenie dla prawidłowego przebiegu terapii. </p>
          </Col>
        </Row>

        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h4 className='service section-title stacked'>
            <span className='top-word'>AKUPUNKTURA.</span><br></br>KOSME- <br></br>TYCZNA
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <p>To zabieg z ramienia medycyny estetycznej, który polega na wbijaniu malutkich igieł w skórę na twarzy.
              Skutkuje to poprawą ukrwienia, napięcia i kolorytu twarzy oraz ma działanie odmładzające, rozświetlające, rewitalizujące.
              Akupunktura stymuluje produkcję kolagenu, ujędrnia i uelastycznia skórę.
              Zmniejsza już istniejące zmarszczki oraz spowalnia proces powstawania nowych.
              Jest zabiegiem polecanym osobom, które chcą w sposób bezinwazyjny poprawić wygląd i odżywienie swojej skóry.
            </p>
          </Col>
        </Row>


      </Container>

      <Container className='offer'>
        <Row className='joga-section'>
          <Col xs={12} md={6}>
            <h1 className='section-title'>
              JOGA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p><span>Zajęcia Jogi opieram na wiedzy z różnych metod nauczania Jogi, m.in. Sivananda, Ashtanga,
              metoda B.K.S. Iyeangara oraz kładę nacisk na jej fizjoterapeutyczne aspekty.</span>
              <br></br><br></br>
              <span className='border-btm'>Podczas ćwiczeń skupimy się na:</span> <br></br>
              <span className='border-btm italic'>budowaniu świadomości ciała i oddechu ,</span> <br></br>
              <span className='border-btm italic'> nauce rozluźniania napięć cielesnych i mentalnych </span> <br></br>
              <span className='border-btm italic'> wzmacnianiu mięśni </span> <br></br>
              <span className='border-btm italic'>harmonizowaniu przepływu energii w ciele</span> <br></br>
            </p>
          </Col>
        </Row>

        <Row className='offer-section'>
          <Col xs={12} md={6}>
            <h2 className='section-title stacked'>
              <span className='g-italic'>W</span><br></br>OFERCIE.
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <p>
              <span className='border-btm italic'>zajęcia grupowe (stacjonarnie i online) - 1h 15min</span> <br></br>
              <span className='border-btm italic'>zajęcia indywidualne z dojazdem z domu - 1h zajęcia</span> <br></br>
              <span className='border-btm italic'> grupowe dla kobiet w ciąży </span> <br></br>

            </p>
          </Col>
        </Row>

      </Container>

      <Container>
        <Row>
          <Col xs={12} md={12}>
            PHOTO
          </Col>
        </Row>
      </Container>

      <Container className='service-list-section orange'>
        <Row className='service-section'>
      
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className='services-tabbed'>
        <Col sm={6}>
          <ListGroup className='service-listgroup'>
            <ListGroup.Item action href="#link1">
            <h3 className='service section-title stacked'>
              JOGA.<br></br> <span className="g-italic">SIVANANDA</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
            <h3 className='service section-title stacked'>
              JOGA.<br></br> <span className="g-italic">DLA<br></br>KAŻDEGO</span>
            </h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
            <p>Nazywana jogą integralną lub klasyczną, ponieważ łączy w sobie prace na 3 poziomach: 
              fizycznym, umysłowym i duchowym. Zajęcia obejmują: ćwiczenia (asany), ćwiczenia oddechowe (pranayama), relaksację (savasana), 
              elementy medytacji i prace z mantrami. Określona sekwencja asan jest dobrana w taki sposób, 
              aby wzajemnie się dopełniać i działać na wszystkie układy ciała. 
              Praktyka Jogi Sivanandy kładzie duży nacisk na naukę głębokiego relaksu, rozwija świadomość ciała oraz uważność.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            <p>Zajęcia przeznaczone dla osób początkujących oraz tych, które pragną pogłębić swoją praktykę. 
              W trakcie zajęć stosuję różnorodne sekwencje asan nakierowane na wzmacnianie, uelastycznianie i rozluźnianie rożnych partii ciała. 
              Uczymy się odbudowywać świadomość własnego organizmu fizycznego, umysłu i oddechu. 
              Zajęcia odbywają się w kameralnych grupach, co pozwala mi indywidualnie podchodzić do potrzeb uczestników.</p> 
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
          <Col xs={12} md={6}>
            <h3 className='service section-title stacked'>
              JOGA.<br></br> <span className="g-italic">SIVANANDA</span>
            </h3>
          </Col>
          <Col xs={12} md={6}>
            <p>Nazywana jogą integralną lub klasyczną, ponieważ łączy w sobie prace na 3 poziomach: 
              fizycznym, umysłowym i duchowym. Zajęcia obejmują: ćwiczenia (asany), ćwiczenia oddechowe (pranayama), relaksację (savasana), 
              elementy medytacji i prace z mantrami. Określona sekwencja asan jest dobrana w taki sposób, 
              aby wzajemnie się dopełniać i działać na wszystkie układy ciała. 
              Praktyka Jogi Sivanandy kładzie duży nacisk na naukę głębokiego relaksu, rozwija świadomość ciała oraz uważność. </p>
          </Col>
        </Row>
        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h3 className='service section-title stacked'>
              JOGA.<br></br> <span className="g-italic">DLA<br></br>KAŻDEGO</span>
            </h3>
          </Col>
          <Col xs={12} md={6}>
            <p>Zajęcia przeznaczone dla osób początkujących oraz tych, które pragną pogłębić swoją praktykę. 
              W trakcie zajęć stosuję różnorodne sekwencje asan nakierowane na wzmacnianie, uelastycznianie i rozluźnianie rożnych partii ciała. 
              Uczymy się odbudowywać świadomość własnego organizmu fizycznego, umysłu i oddechu. 
              Zajęcia odbywają się w kameralnych grupach, co pozwala mi indywidualnie podchodzić do potrzeb uczestników. </p>
          </Col>
        </Row>
        <Row className='service-section'>
          <Col xs={12} md={6}>
            <h3 className='service section-title stacked'>
              JOGA.<br></br> <span className="g-italic">DLA<br></br>KOBIET<br></br>W  CIĄŻY</span>
            </h3>
          </Col>
          <Col xs={12} md={6}>
            <p>Zajęcia skierowane są dla przyszłych mam. Pomagają przygotować się do porodu. Regularne ćwiczenie jogi podczas ciąży buduje siłę fizyczną oraz psychiczną, wzmacnia i stabilizuje system nerwowy. </p>
            <p>
            <span className='border-btm '>Na zajęciach skupimy się na: </span> <br></br>
              <span className='border-btm italic'>nauce technik oddechowych przydatnych podczas porodu</span> <br></br>
              <span className='border-btm italic'>łagodnym otwieraniu bioder,</span> <br></br>
              <span className='border-btm italic'> wzmacnianiu kręgosłupa i mięśni miednicy - nawiązywaniu kontaktu z Twoim dzieckiem</span> <br></br>
              <span className='border-btm italic'>  zapobieganiu oraz łagodzeniu dolegliwości około ciążowych.</span> <br></br>
              <span className='italic'>   Zapraszam wszystkie kobiety od 2 trymestru ciąży.</span> <br></br>

             

            </p>
          </Col>
        </Row>
      </Container>

      <Container className='schedule'>
        <Row>
                <Col md={1}></Col>
                <Col md={10}>
                <h2 className='service section-title stacked'>
                <span className="g-italic swaped">GRAFIK</span><br></br> ZAJĘĆ.<br></br>
            </h2>
                  <Row>
                 
                  <Col className='weekday'>
                    <h4>PONIEDZIAŁEK</h4>
                    <h5>9:00 -10:15</h5>
                    <h5>JOGA. SIVANANDA</h5>
                    <h5 className='underline'>Grota Solna Galos</h5>
                    <br></br>
                    <h5>10:30 -11:45</h5>
                    <h5>JOGA. DLA KOBIET W CIĄŻY</h5>
                    <h5 className='underline'>Grota Solna Galos</h5>
                    <br></br>
                    <h5>18:00 -19:15</h5>
                    <h5>JOGA. DLA KAŻDEGO</h5>
                    <h5 className='underline'>Przystanek oddech</h5>
                  </Col>
                  <Col className='weekday' >
                    <h4>WTOREK</h4>
                    <h5>10:30 -11:45</h5>
                    <h5>JOGA. DLA KOBIET W CIĄŻY</h5>
                    <h5 className='underline'>Przystanek oddech</h5>
                    <br></br>
                  </Col>
                  <Col className='weekday' ><h4>ŚRODA</h4></Col>
                  <Col className='weekday' ><h4>CZWARTEK</h4></Col>
                  <Col className='weekday'>
                    <h4>PIĄTEK</h4>
                    <h5>18:00 -19:15</h5>
                    <h5>JOGA. DLA KAŻDEGO</h5>
                    <h5 className='underline'>Przystanek oddech</h5>
                    <br></br>
                    <h5>10:30 -11:45</h5>
                    <h5>JOGA. DLA KOBIET W CIĄŻY</h5>
                    <h5 className='underline'>Przystanek oddech</h5>
                    </Col>
                  </Row>
                
                </Col>
                <Col md={1}></Col>

        </Row>

      </Container>

      <Container className='pricelist'>
        <h1 className='gigantic'>
          CENNIK
        </h1>
        <Row>
        <Table responsive="md">
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
                <Col xs={12} md={6}>
                <h5 className='pricelist-title'>
                  JOGA.
                </h5>
                </Col>

                <Col xs={12} md={6}>
                <h5 className='pricelist-title'>
                  MEDYCYNA CHIŃSKA
                </h5>
                  </Col>
        </Row>
      </Container>

    <Container className='contact'>
    <img src={kontakt} alt="Kontakt" />
      <Row>
        <Col md={4}>
        <h1 className='less-gigantic section-title stacked'>
        
        <span className="g-italic">KON<br></br>TAKT</span>
        </h1>
        </Col>
        <Col md={4}>
          <p>Weronika Kulczyńska-Trzeciak<br></br> <br></br> 
          609 077 780<br></br>  weronika.uzdrowisko@gmail.com</p>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
