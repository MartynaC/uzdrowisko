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
import banki from './images/banki.png';
import moxa from './images/moxa.png';
import guasha from './images/guasha.png';
import ziolo from './images/ziololecznictwo.png';
import dieta from './images/dietetyka.png';
import jogaSiva from './images/joga_siva.png';
import jogaKazdy from './images/joga_dla_kazdego.png';
import jogaCiaza from './images/joga_ciaza.png';
import omnie from './images/omnie.png';
import background from './images/about.png';





function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container className='about-section' id='o-mnie'>
        <Row>
          <Col xs={12} md={6} className='about-img'>
    
            <h1 className='section-title special-first'>
          
              <span className="g-italic">O</span>MNIE.
            </h1>
            
          </Col>
          <Col xs={12} md={6}>
            <p><span className='italic'>Jestem pasjonatką Jogi i Medycyny Holistycznej.</span> Swoją drogę rozpoczęłąm jako pacjentka borykająca się z różnymi dolegliwościami oraz uczennica jogi poszukująca połączenia
              ze swoim ciałem oraz umysłem. Podążając za wiedzą i rozwojem, zostałam nauczycielem jogi, a także akupunkturzystką. <br></br><br></br>Wierzę,
              że zdrowie fizyczne i psychiczne są naturalnym stanem, do którego dąży każdy organizm. Naszym zadaniem jest zrozumieć jego naturę oraz wspierać go w dążeniu do właściwego optimum.</p>
          </Col>

        </Row>
      </Container>

      <Container className='medicine-section'>
        <Row>
          <Col xs={12} md={6}>
            <h1 className='section-title stacked desktop-only'>
              <span className="g-italic">MEDY<br></br>CYNA</span><br></br>CHIŃ<br></br>SKA.
            </h1>
            <h1 className='section-title stacked mobile-only'>
              <span className="g-italic">MEDYCYNA</span><br></br>CHIŃSKA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p>Jestem absolwentką <span className='italic'></span>Trójmiejskiego Ośrodka Medycyny Orientalnej (TOMO) w specjalizacji akupunktura. Ukończyłam dodatkowe kursy i szkolenia
              (m. in. kurs dietetyki wg. 5 przemian, ziołolecznictwa,
              moxy, masażu gua sha, diagnostyki z pulsu i języka), szkolenie „Level Up - Stems and Branches”.<br></br>
              „Akupunktura Klasyczna-Michał Richter” (w toku)</p>
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


      <Container className='medicine-section desc' id="chinska">
        <Row>
          <Col xs={12} md={6}>
            <h1 className='section-title stacked desktop-only'>
              <span className="g-italic">MEDY<br></br>CYNA</span><br></br>CHIŃ<br></br>SKA.
            </h1>
            <h1 className='section-title stacked mobile-only'>
              <span className="g-italic">MEDYCYNA</span><br></br>CHIŃSKA.
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p><span className='g-italic'>Medycyna Chińska </span>(jeden z najstarszych systemów medycznych świata) jest skuteczną metodą profilaktyki zdrowia oraz leczenia chorób.
              Traktuje człowieka jako jedność na poziomie ciała, umysłu oraz ducha - nasze myśli, emocje i kondycja fizyczna wpływają na siebie nawzajem.
              Terapia opiera się na równoważeniu przepływu energii, dzięki czemu organizm wraca do naturalnego stanu równowagi.
             <br></br><br></br> Pracując z pacjentem stosuję szczegółową diagnozę opierającą się na wywiadzie, badaniu pulsu oraz oględzinach języka.
             Na tej podstawie wyznaczam strategie leczenia (dobór odpowiednich punktów akupunkturowych, ewentualnie ziół, wskazówek żywieniowych oraz korekty szkodliwych nawyków). 
            </p>
          </Col>
        </Row>
      </Container>

      <Container className='service-list-section'>
<Row className='service-section'>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#akupunktura">
<Row className='services-tabbed'>
<Col sm={6}>
          <ListGroup className='service-listgroup'>
            <ListGroup.Item action href="#akupunktura">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={aku} alt="Akupunktura klasyczna" />AKUPUNKTURA.</span><span className="g-italic">KLASYCZNA</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#banki">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={banki} alt="Bańki" />BAŃKI.</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#guasha">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={guasha} alt="Gua Sha" /> GUA SHA.</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#ziololecznictwo">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={ziolo} alt="Ziołolecznictwo" />ZIOŁOLECZNICTWO.</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#dietetyka" className='dietetyka-special'>
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={dieta} alt="Dietetyka" />DIETETYKA WEDŁUG</span> <br></br><span className="g-italic">MEDYCYNY CHIŃSKIEJ.</span>
            </h3>
            </ListGroup.Item>

            <ListGroup.Item action href="#aku-kosmetyczna">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'> <img src={aku} alt="Akupunktura kosmetyczna" />AKUPUNKTURA.</span> <span className="g-italic">KOSMETYCZNA</span>
            </h3>
            </ListGroup.Item>

            
          </ListGroup>
        </Col>
        <Col sm={6}>
          <Tab.Content>
            <Tab.Pane eventKey="#akupunktura">
            <p><span className='italic'>Skuteczna metoda leczenia rożnego rodzaju chorób i dolegliwości bólowych. </span>
              Zabieg polega na wbijaniu cieniutkich igieł w określone punkty na ciele.
              Zgodnie z tym systemem każda jednostka ma swoje mocne i słabe strony, diagnozujemy je poprzez badanie pulsu pacjenta.
              Po znalezieniu najsłabszych ogniw wzmacniamy je za pomocą odpowiednio dobranych punktów, dzięki
              czemu organizm wraca do równowagi oraz zmienia się samopoczucie fizyczne i psychiczne.
              Długość trwania leczenia: Zależy od organizmu pacjenta i zaawansowania choroby.
              W przypadku lekkich dolegliwości- od 2 do 3 miesięcy, jeśli choroba jest długotrwała i zaawansowana czas
              leczenia może wydłużać się do 2-3 lat.
              Częstotliwość zabiegów ustalamy na spotkaniu (zwykle co 2-3 tygodnie, przy długotrwałym leczeniu częstotliwość się zmniejsza).
            </p>
            </Tab.Pane>
            <Tab.Pane eventKey="#banki">
            <p>Jest to starodawny zabieg, polegający na wytworzeniu podciśnienia w bańce (czyli szklanym owalnym naczyniu) i przyłożeniu jej do skóry np. pleców. 
              Powstałe podciśnienie zasysa skórę i warstwę podskórną do środka naczynia, dzięki czemu dochodzi do lokalnego wynaczynienia krwi, 
              która traktowana jest przez układ odpornościowy jako obce białko, co pobudza go do działania i zwiększenia ilości przeciwciał. 
              Zabieg ten jest pomocny przy infekcjach, przeziębieniach, obniżonej odporności organizmu, problemach z górnymi drogami oddechowymi, bólu pleców, mięśni, napięciu i stresie. 
              Pomaga poruszyć zastoje Krwi i Qi.
            </p>
            </Tab.Pane>
            <Tab.Pane eventKey="#guasha">
            <p>To starożytny masaż uzdrawiający, który polega na drapaniu skóry specjalnym urządzeniem wykonanym z rogu zwierzęcia lub kamienia.
              Poruszany jest w ten sposób przepływ Qi, Krwi i Limfy.
              Zabieg ten doskonale się sprawdza w przypadku infekcji, napięć i sztywności, bóli mięśni, stawów i głowy. Stymuluje układ odpornościowy.
            </p>
            </Tab.Pane>

            <Tab.Pane eventKey="#ziololecznictwo">
            <p>Niepodważalna skuteczność tej terapii sięga korzeniami aż do starożytnośći. W terapii głównie korzystam z receptur chińskich.
              Ich opis działania jest szczegółowy pod względem smaku, termiki i oddziaływania na dolegliwości oraz konkretne układy narządów.
              Dzięki temu łatwiej, a przede wszystkim celniej jest dobrać odpowiedni zestaw zindywidualizowany do potrzeb pacjenta.
              Nierzadko terapię uzupełniamy o zioła zachodnie.</p>
            </Tab.Pane>

            <Tab.Pane eventKey="#dietetyka">
            <p>Jeśli pojawia się taka potrzeba, często uzupełniamy terapię o ogólne wskazówki dietetyczne.
              W podejściu Medycyny Chińskiej każdy produkt ma konkretny smak, termikę i sposób oddziaływania na organizm,
              dlatego odpowiednie odżywianie, dostosowane do Pór Roku i klimatu,
              w którym żyjemy ma ogromne znaczenie dla prawidłowego przebiegu terapii. </p>
            </Tab.Pane>

            <Tab.Pane eventKey="#aku-kosmetyczna">
            <p>Jeśli pojawia się taka potrzeba, często uzupełniamy terapię o ogólne wskazówki dietetyczne.
              W podejściu Medycyny Chińskiej każdy produkt ma konkretny smak, termikę i sposób oddziaływania na organizm,
              dlatego odpowiednie odżywianie, dostosowane do Pór Roku i klimatu,
              w którym żyjemy ma ogromne znaczenie dla prawidłowego przebiegu terapii. </p>
            </Tab.Pane>

           
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </Row>
      </Container>
      
    

      <Container className='offer' id='joga'>
        <Row className='joga-section desc'>
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

       {/*  <Row className='offer-section'>
          <Col xs={12} md={6}>
            <h2 className='section-title stacked'>
              <span className='g-italic'>W</span><br></br>OFERCIE.
            </h2>
          </Col>
          <Col xs={12} md={6} className="offer-desc">
            <p>
              <span className='border-btm italic'>zajęcia grupowe (stacjonarnie i online) - 1h 15min</span> <br></br>
              <span className='border-btm italic'>zajęcia indywidualne z dojazdem z domu - 1h zajęcia</span> <br></br>
              <span className='border-btm italic'> grupowe dla kobiet w ciąży </span> <br></br>

            </p>
          </Col>
        </Row>*/}

      </Container>

     {/*  <Container className='joga-foto'>
        <Row>
          <Col xs={12} md={12}>
          <img src={joga} alt="Joga" className='joga-img' />
          </Col>
        </Row>
      </Container>*/}

      <Container className='service-list-section orange'>
        <Row className='service-section'>
      
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#joga-siva">
      <Row className='services-tabbed'>
        <Col sm={6}>
          <ListGroup className='service-listgroup'>
            <ListGroup.Item action href="#joga-siva">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={jogaSiva} alt="Joga Sivananda" />JOGA.</span> <span className="g-italic">SIVANANDA</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#joga-dla-kazdego">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={jogaKazdy} alt="Joga Sivananda" />JOGA.</span> <span className="g-italic">DLA KAŻDEGO</span>
            </h3>
            </ListGroup.Item>
            <ListGroup.Item action href="#joga-dla-kobiet-w-ciazy">
            <h3 className='service section-title stacked'>
            <span className='top-word withphoto'><img src={jogaCiaza} alt="Joga Sivananda" />JOGA.</span> <span className="g-italic">DLA KOBIET W CIĄŻY</span>
            </h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <Tab.Content>
            <Tab.Pane eventKey="#joga-siva">
            <p>Nazywana jogą integralną lub klasyczną, ponieważ łączy w sobie prace na 3 poziomach: 
              fizycznym, umysłowym i duchowym. Zajęcia obejmują: ćwiczenia (asany), ćwiczenia oddechowe (pranayama), relaksację (savasana), 
              elementy medytacji i prace z mantrami. Określona sekwencja asan jest dobrana w taki sposób, 
              aby wzajemnie się dopełniać i działać na wszystkie układy ciała. 
              Praktyka Jogi Sivanandy kładzie duży nacisk na naukę głębokiego relaksu, rozwija świadomość ciała oraz uważność.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#joga-dla-kazdego">
            <p>Zajęcia przeznaczone dla osób początkujących oraz tych, które pragną pogłębić swoją praktykę. 
              W trakcie zajęć stosuję różnorodne sekwencje asan nakierowane na wzmacnianie, uelastycznianie i rozluźnianie rożnych partii ciała. 
              Uczymy się odbudowywać świadomość własnego organizmu fizycznego, umysłu i oddechu. 
              Zajęcia odbywają się w kameralnych grupach, co pozwala mi indywidualnie podchodzić do potrzeb uczestników.</p> 
            </Tab.Pane>
            <Tab.Pane eventKey="#joga-dla-kobiet-w-ciazy">
            <p>Zajęcia skierowane są dla przyszłych mam. Pomagają przygotować się do porodu. Regularne ćwiczenie jogi podczas ciąży buduje siłę fizyczną oraz psychiczną, wzmacnia i stabilizuje system nerwowy. </p>
            <p>
            <span className='border-btm '>Na zajęciach skupimy się na: </span> <br></br>
              <span className='border-btm italic'>nauce technik oddechowych przydatnych podczas porodu</span> <br></br>
              <span className='border-btm italic'>łagodnym otwieraniu bioder,</span> <br></br>
              <span className='border-btm italic'> wzmacnianiu kręgosłupa i mięśni miednicy - nawiązywaniu kontaktu z Twoim dzieckiem</span> <br></br>
              <span className='border-btm italic'>  zapobieganiu oraz łagodzeniu dolegliwości około ciążowych.</span> <br></br>
              <span className='italic'>   Zapraszam wszystkie kobiety od 2 trymestru ciąży.</span> <br></br>

             

            </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
         
        </Row>
      </Container>

    {/*  <Container className='schedule' id='grafik'>
        <Row>
                <Col md={1}></Col>
                <Col md={10}>
                <h2 className='service section-title stacked'>
                <span className="g-italic swaped">GRAFIK</span><br></br> ZAJĘĆ.<br></br>
            </h2>
                  <Row className='schedule-row'>
                 
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

      </Container>*/}

      <Container className='pricelist' id='cennik'>
        <h1 className='gigantic'>
          CENNIK
        </h1>
        <Row className='pricelist-columns'>
       
               {/*<Col xs={12} md={5} className='bordered-column'>
                <h5 className='pricelist-title'>
                  JOGA.
                </h5>
                <Row className='price-list joga'>
                <Col xs={12} md={6}>
                  <h5 className='usluga'>Usługa</h5>
                </Col>
                <Col xs={12} md={6}>
                <h5 className='cena'>Cena</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5 className='usluga'>Usługa</h5>
                </Col>
                <Col xs={12} md={6}>
                <h5 className='cena'>Cena</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5 className='usluga'>Usługa</h5>
                </Col>
                <Col xs={12} md={6}>
                <h5 className='cena'>Cena</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5 className='usluga'>Usługa</h5>
                </Col>
                <Col xs={12} md={6}>
                <h5 className='cena'>Cena</h5>
                </Col>
                </Row>
                </Col>*/}

                

                <Col xs={12} md={12}>
                <h5 className='pricelist-title'>
                  <span className='g-italic'>MEDYCYNA</span> CHIŃSKA
                </h5>
                <Row className='price-list medycyna' >
                  <Col xs={6} md={6}>
                   <h5 className='usluga'>Medycyna Chińska<br></br> 1 wizyta (diagnoza + zabieg akupunktury )</h5>
                  </Col>
                  <Col xs={6} md={6}>
                   <h5 className='cena'>  <br></br> 150zł<br></br>( czas trwania ok 45min - 1h)</h5>
                  </Col>
                  </Row>
                  <Row className='price-list medycyna' >
                     <Col xs={6} md={6}>
                      <h5 className='usluga'>Kolejna wizyta</h5>
                    </Col>
                      <Col xs={6} md={6}>
                       <h5 className='cena'> 100zł <br></br>(czas trwania ok 30min)</h5>
                      </Col>
                  </Row>
                <Row className='price-list medycyna' >
                  <Col xs={6} md={6}>
                    <h5 className='usluga'>Akupunktura kosmetyczna</h5>
                  </Col>
                  <Col xs={6} md={6}>
                   <h5 className='cena'>150zł <br></br>(czas trwania ok 1h)</h5>
                  </Col>
                </Row>
                  </Col>
        </Row>
      </Container>

    <Container className='contact' id='kontakt'>
      <Col xs={12} md={12}>
 
    </Col>
      <Row>
        <Col md={4} className='section'>
        <h1 className='less-gigantic section-title stacked desktop-only'>
        
        <span className="g-italic">KON<br></br>TAKT</span>
        </h1>
        <h1 className='less-gigantic section-title stacked mobile-only'>
        
        <span className="g-italic">KONTAKT</span>
        </h1>
        </Col>
        <Col md={4}>
          <p>Weronika Kulczyńska-Trzeciak<br></br> <br></br> 
          <a href="tel:609 077 780">609 077 780</a><br></br> <a href="mailto:weronika.uzdrowisko@gmail.com">weronika.uzdrowisko@gmail.com</a></p>
        </Col>
        <Col md={4}>
          <p>Adres gabinetu</p>
          <p>Ul. Naramowicka 240, Poznań<br></br>
(1 piętro)</p>
        </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default App;
