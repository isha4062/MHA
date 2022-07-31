import React from "react";
import img1 from "../img/pic1.jpg";
import img2 from "../img/pic2.jpg";
import img3 from "../img/pic3.jpg";
import img4 from "../img/pic4.jpg";
import movie1 from "../img/movie2.jpg";
import movie2 from "../img/movie3.jpg";
import movie3 from "../img/movie1.jpg";
import tab1 from "../img/table1.webp";
import tab2 from "../img/table2.png";
import tab3 from "../img/table3.jpeg";
import tab4 from "../img/table4.webp";
import tab5 from "../img/table5.png";
import tab6 from "../img/table6.jfif";
import tab7 from "../img/table7.webp";
import tab8 from "../img/table8.jpg";
import tab9 from "../img/table9.jfif";
import tab10 from "../img/table10.jfif";
import Style from "./home.module.css";
import { Footer } from "./footer";

export const Home = () => {
  const carStyle = {
    height: "650px",
  };
  const img = {
    height: "645px",
  };
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner" style={carStyle}>
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." style={img} />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." style={img} />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." style={img} />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." style={img} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr /><hr />
      <div className={Style.seasons}>
        <h1 className={Style.head}>Seasons</h1>
        <div className="accordion" id="accordionExample" style={{ width: "80%", marginLeft: "125px", paddingTop: "40px" }}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h6 className={Style.title}>Season #1</h6>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={Style.para}><strong>13 episodes</strong><br /> The appearance of “quirks,” newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.

                  Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku’s unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might’s quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!

                  Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year’s freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h6 className={Style.title}>Season #2</h6>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={Style.para}><strong>25 episodes</strong><br /> At UA Academy, not even a violent attack can disrupt their most prestigious event: the school sports festival. Renowned across Japan, this festival is an opportunity for aspiring heroes to showcase their abilities, both to the public and potential recruiters.

                  However, the path to glory is never easy, especially for Izuku Midoriya—whose quirk possesses great raw power but is also cripplingly inefficient. Pitted against his talented classmates, such as the fire and ice wielding Shouto Todoroki, Izuku must utilize his sharp wits and master his surroundings to achieve victory and prove to the world his worth.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h6 className={Style.title}>Season #3</h6>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={Style.para}><strong>25 episodes</strong><br /> As summer arrives for the students at UA Academy, each of these superheroes-in-training puts in their best efforts to become renowned heroes. They head off to a forest training camp run by UA’s pro heroes, where the students face one another in battle and go through dangerous tests, improving their abilities and pushing past their limits. However, their school trip is suddenly turned upside down when the League of Villains arrives, invading the camp with a mission to capture one of the students.

                  Boku no Hero Academia 3rd Season follows Izuku “Deku” Midoriya, an ambitious student training to achieve his dream of becoming a hero similar to his role model—All Might. Being one of the students caught up amidst the chaos of the villain attack, Deku must take a stand with his classmates and fight for their survival</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <h6 className={Style.title}>Season #4</h6>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={Style.para}><strong>25 episodes</strong> <br /> After successfully passing his Provisional Hero License exam, Izuku “Deku” Midoriya seeks out an extracurricular internship with a professional hero agency. At the recommendation of his mentor All Might, Midoriya lands a position under All Might’s former sidekick, Sir Nighteye, now a famous hero in his own right.

                  As Midoriya’s classmates further their own abilities through various internships, up-and-coming villain Kai Chisaki utilizes his terrifying powers to gather favor in the criminal underworld. Known by the moniker Overhaul, Chisaki’s ambitions collide with the League of Villains and its leader, Tomura Shigaraki.

                  Through his work with Sir Nighteye, Midoriya discovers Chisaki’s crime syndicate and the villain’s hostile relationship with a mysterious young girl named Eri. Fearing for the child’s safety, Midoriya and his upperclassman Mirio Toogata must work together to put an end to Chisaki’s reign of terror.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <h6 className={Style.title}>Season #5</h6>
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={Style.para}><strong>25 episodes</strong><br />UA Academy’s Class 1-A has been the focus of a substantial amount of public attention due to the multiple villain attacks they have faced over the past school year. This attention has left Class 1-A’s rivals, Class 1-B, feeling quite bitter. Desiring to prove their skills, they look forward to the opportunity that has been given to them: a set of mock battles between the students of each class.

                  The classes are split into squads of four, each of which is tasked with capturing the other group members. The winner is the group who first secures all of the opposing team. While this sounds simple, a curveball is thrown into the mix with the inclusion of General Course Student Hitoshi Shinsou, who wishes to transfer into the Hero Course. Despite using his training with Class 1-A’s homeroom teacher Shouta “Eraserhead” Aizawa to prove that he’s capable of being a real hero, he is still far behind the others due to his lack of experience. However, Shinsou is determined to overcome this challenge.

                  Thus begins the fiery competition between Class 1-A and 1-B as each tries to prove that they are superior to the other</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr /><hr />
      <div className={Style.movies}>
        <h1 className={Style.head}>Movies</h1>
        <div className={Style.text}>
          <div className={Style.movie}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={movie1} alt="" style={{ width: "100%", height: "400px" }} />
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className={Style.modalTitle} id="exampleModalLabel">Two Heroes</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p className={Style.modalPara}>All Might and Deku accept an invitation to go abroad to a floating and mobile manmade city, called ‘I Island’, where they research quirks as well as hero supplemental items at the special ‘I Expo’ convention that is currently being held on the island. During that time, suddenly, despite an iron wall of security surrounding the island, the system is breached by a villain, and the only ones able to stop him are the students of Class 1-A.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.movie}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <div className="img">
                <img src={movie2} alt="" style={{ width: "100%", height: "400px" }} />
              </div>
            </button>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className={Style.modalTitle} id="exampleModalLabel2">Heroes Rising</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p className={Style.modalPara}>Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it’s more like a vacation … until they’re attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens’ lives on the line, there’s no time for questions. Deku and his friends are the next generation of heroes, and they’re the island’s only hope</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.movie}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <div className="img">
                <img src={movie3} alt="" style={{ width: "100%", height: "400px" }} />
              </div>
            </button>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className={Style.modalTitle} id="exampleModalLabel3">World Heroes' Mission</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p className={Style.modalPara}>When a cult of terrorists ruins a city by releasing a toxin that causes people's abilities to spiral out of control, Japan's greatest heroes spread around the world in an attempt to track down the mastermind and put him to justice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr /><hr />
      <div className={Style.images}>
        <h1 className={Style.head}>Visuals</h1>
        <table className={Style.table}>
          <tbody>
          <tr>
            <td>
              <img src={tab1} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
            <td>
              <img src={tab2} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
            <td rowSpan={3}>
              <img src={tab6} alt="" style={{ width: "100%", height: "400px" }} />
            </td>
            <td colSpan={2}>
              <img src={tab8} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
          </tr>
          <tr>
            <td>
              <img src={tab3} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
            <td>
              <img src={tab4} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
            <td>
              <img src={tab7} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
            <td>
              <img src={tab10} alt="" style={{ width: "100%", height: "200px" }} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <img src={tab9} alt="" style={{ width: "100%", height: "200px" }}/>
            </td>
            <td colSpan={2}>
              <img src={tab5} alt="" style={{ width: "100%", height: "200px" }}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr /><hr />
      <div className={Style.footer}>
        <Footer />
      </div>
    </>
  );
};
