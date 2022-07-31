import React from 'react';
import Style from "./char.module.css";
import img1 from "../img/card1.jpg";
import img2 from "../img/card2.jfif";
import img3 from "../img/card3.jpg";
import img4 from "../img/card4.jpg";
import img5 from "../img/card5.jpg";
import img6 from "../img/card6.jpg";
import img7 from "../img/card7.jfif";
import img8 from "../img/card8.jpg";
import img9 from "../img/card9.jfif";
import img10 from "../img/card10.jfif";
import img11 from "../img/card11.jpg";
import img12 from "../img/card12.jpg";
import img13 from "../img/card13.jfif";
import img14 from "../img/card14.jfif";
import img15 from "../img/card15.jfif";
import img16 from "../img/card16.jpg";
import img17 from "../img/card17.jpg";
import img18 from "../img/card18.jfif";
import img19 from "../img/card19.jfif";
import img20 from "../img/card20.jfif";
import img21 from "../img/card21.jfif";
import img22 from "../img/card22.jfif";
import img23 from "../img/card23.jfif";
import img24 from "../img/card24.jfif";
import img25 from "../img/card25.jfif";
import img26 from "../img/card26.jfif";
import img27 from "../img/card27.jfif";
import img28 from "../img/card28.jfif";
import img29 from "../img/card29.jfif";
import img30 from "../img/card30.jfif";
import vil1 from "../img/vil1.jfif";
import vil2 from "../img/vil2.jfif";
import vil3 from "../img/vil3.jfif";
import vil4 from "../img/vil4.jfif";
import vil5 from "../img/vil5.jfif";
import vil6 from "../img/vil6.jfif";
import vil7 from "../img/vil7.jfif";
import vil8 from "../img/vil8.jfif";
import vil9 from "../img/vil9.webp";

export const Character = () => {
    const img = {
        height : "150px",
        borderTopLeftRadius : "20px",
        borderTopRightRadius : "20px"
    }
    return (
        <>
            <div className="hero">
                <hr /><hr />
                <h1 className={Style.head}>Heros</h1>
                <div className={Style.cards}>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img1} className="card-img-top" alt={img1} style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Izuku Midoriya</h5>
                                <p className={Style.cardText}>Hero name : Deku</p>
                                <p className={Style.cardText}>Quirk : One for All</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img2} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Toshinori Yagi</h5>
                                <p className={Style.cardText}>Hero name : All Might</p>
                                <p className={Style.cardText}>Quirk : One for All</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img3} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Katsuki Bakugo</h5>
                                <p className={Style.cardText}>Hero name : DynaMight</p>
                                <p className={Style.cardText}>Quirk : Explosion</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img4} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Shoto Todoroki</h5>
                                <p className={Style.cardText}>Hero name : Shoto</p>
                                <p className={Style.cardText}>Quirk : Half-Cold Half-Hot</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img5} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Shota Aizawa</h5>
                                <p className={Style.cardText}>Hero name : Eraserhead</p>
                                <p className={Style.cardText}>Quirk : Erasure</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img6} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Enji Todoroki</h5>
                                <p className={Style.cardText}>Hero name : Endeavor</p>
                                <p className={Style.cardText}>Quirk : Hellflame</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img7} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Keigo Takami</h5>
                                <p className={Style.cardText}>Hero name : Hawks</p>
                                <p className={Style.cardText}>Quirk : Fierce Wings</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img8} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Nejire Hado</h5>
                                <p className={Style.cardText}>Hero name : Nejire Chan</p>
                                <p className={Style.cardText}>Quirk : Wave Motion</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img9} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Mirio Togata</h5>
                                <p className={Style.cardText}>Hero name : Lemillion</p>
                                <p className={Style.cardText}>Quirk : Permeation</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img10} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Tamaki Amajiki</h5>
                                <p className={Style.cardText}>Hero name : Suneater</p>
                                <p className={Style.cardText}>Quirk : Manifest</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img11} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Ochako Uraraka</h5>
                                <p className={Style.cardText}>Hero name : Uravity</p>
                                <p className={Style.cardText}>Quirk : Zero Gravity</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img12} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Tsuyu Asui</h5>
                                <p className={Style.cardText}>Hero name : Froppy</p>
                                <p className={Style.cardText}>Quirk : Frog</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img13} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Momo Yaoyorozu</h5>
                                <p className={Style.cardText}>Hero name : Creati</p>
                                <p className={Style.cardText}>Quirk : Creation</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img14} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Kyoka Jiro</h5>
                                <p className={Style.cardText}>Hero name : Earphone Jack</p>
                                <p className={Style.cardText}>Quirk : Earphone Jack</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img15} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Eijiro Kirishima</h5>
                                <p className={Style.cardText}>Hero name : Red Riot</p>
                                <p className={Style.cardText}>Quirk : Hardening</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img16} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Mina Ashido</h5>
                                <p className={Style.cardText}>Hero name : Pinky</p>
                                <p className={Style.cardText}>Quirk : Acid</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img17} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Denki Kaminari</h5>
                                <p className={Style.cardText}>Hero name : Chargebolt</p>
                                <p className={Style.cardText}>Quirk : Electricity</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img18} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Yuga Aoyama</h5>
                                <p className={Style.cardText}>Hero name : Can't Stop Twinkling</p>
                                <p className={Style.cardText}>Quirk : Navel Laser</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img19} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Toru Hagakure</h5>
                                <p className={Style.cardText}>Hero name : Invisible Girl</p>
                                <p className={Style.cardText}>Quirk : Invisibility</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img20} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Minoru Mineta</h5>
                                <p className={Style.cardText}>Hero name : Grape Juice</p>
                                <p className={Style.cardText}>Quirk : Pop Off</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img21} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Fumikage Tokoyami</h5>
                                <p className={Style.cardText}>Hero name : Tsukuyomi</p>
                                <p className={Style.cardText}>Quirk : Dark Shadow</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img22} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Mezo Shoji</h5>
                                <p className={Style.cardText}>Hero name : Tentacole</p>
                                <p className={Style.cardText}>Quirk : Dupli-arms</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img23} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Hanta Sero</h5>
                                <p className={Style.cardText}>Hero name : Cellophane</p>
                                <p className={Style.cardText}>Quirk : Tape</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img24} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Tenya Iida</h5>
                                <p className={Style.cardText}>Hero name : Ingenium</p>
                                <p className={Style.cardText}>Quirk : Engine</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img25} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Koji Koda</h5>
                                <p className={Style.cardText}>Hero name : Anima</p>
                                <p className={Style.cardText}>Quirk : Anivoice</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img26} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Mashirao Ojiro</h5>
                                <p className={Style.cardText}>Hero name : Tailman</p>
                                <p className={Style.cardText}>Quirk : Tail</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img27} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Hitoshi Shinso</h5>
                                <p className={Style.cardText}>Hero name : Hitoshi Shinso</p>
                                <p className={Style.cardText}>Quirk : Brainwashing</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img28} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Mei Hatsume</h5>
                                <p className={Style.cardText}>Hero name : Mei Hatsume</p>
                                <p className={Style.cardText}>Quirk : Zoom</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img29} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Hizashi Yamada</h5>
                                <p className={Style.cardText}>Hero name : Present Mic</p>
                                <p className={Style.cardText}>Quirk : Voice</p>
                            </div>
                    </div>
                    <div className={Style.card} style={{width: "200px"}}>
                        <img src={img30} className="card-img-top" alt="..." style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Nana Shimura</h5>
                                <p className={Style.cardText}>Hero name : Nana Shimura</p>
                                <p className={Style.cardText}>Quirk : One For All</p>
                            </div>
                    </div>
                </div>
                <hr /><hr />
                <h1 className={Style.head}>Villians</h1>
                <div className={Style.cards}>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil1} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Shigaraki</h5>
                                <p className={Style.cardText}>Quirk : All For One</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil2} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Tomura Shigaraki </h5>
                                <p className={Style.cardText}>Quirk : Decay</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil3} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Stain</h5>
                                <p className={Style.cardText}>Quirk : Bloodcurdle</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil4} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Kurogiri</h5>
                                <p className={Style.cardText}>Quirk : Black Fog</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil5} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Dabi</h5>
                                <p className={Style.cardText}>Quirk : Blueflame</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil6} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Himiko Toga</h5>
                                <p className={Style.cardText}>Quirk : Transform</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil7} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Kai Chisaki</h5>
                                <p className={Style.cardText}>Quirk : Overhaul</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil8} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Twice</h5>
                                <p className={Style.cardText}>Quirk : Double</p>
                            </div>
                    </div>
                <div className={Style.card} style={{width: "200px"}}>
                        <img src={vil9} className="card-img-top" alt="" style = {img}/>
                            <div className="card-body">
                                <h5 className={Style.cardTitle}>Nomu</h5>
                                <p className={Style.cardText}>Quirk : Shock Absorption</p>
                            </div>
                    </div>
                </div>
                <hr /><hr />
            </div>
        </>
    )
}
