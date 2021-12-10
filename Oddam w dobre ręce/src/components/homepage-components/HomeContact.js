import React from 'react';
import Title from "../common/Title";
import fb from "../../assets/Facebook.svg"
import ig from "../../assets/Instagram.svg"


const HomeContact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__form">
                <Title title="Skontaktuj się z nami"/>
                <form>
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" required id="name" name="name" placeholder="Krzysztof"/>
                    <label htmlFor="email">Wpisz swój email</label>
                    <input id="email" name="email" placeholder="abc@xyz.pl" type="email" required/>
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <input type="text" required id="message" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    <button className="button"><span>Wyślij</span></button>
                </form>
            </div>
            <div className="contact__footer">
                <span></span>
                <small>Copyright by Coders Lab</small>
                <div className="footer__social">
                    <img src={fb} alt="Facebook"/>
                    <img src={ig} alt="Instagram"/>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;