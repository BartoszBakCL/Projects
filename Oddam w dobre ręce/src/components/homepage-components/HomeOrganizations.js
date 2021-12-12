import React, {useEffect, useState} from 'react';
import Title from "../common/Title";
import {foundations} from "../../data/organizacjeifundajce";



 const HomeOrganizations = () => {
     const [isShow, setIsShow] = useState(true);

     const handleClick = () => {
         setIsShow(!isShow);
     };

     useEffect( () => {
        document.querySelector("#organizations > div.organization__button > button:nth-child(1)").focus();
    });
    // const checkActive = () => {
    //      const checkActiveInterwal = setInterval(() => {
    //          // const ActiveElement = document.activeElement;
    //          console.log(document.activeElement);
    //          }, 500);
    //  }

     const ActiveElement = document.activeElement.innerHTML;
     // onLoad={checkActive}
    return (
        <section className="organization" id="organizations">
            <Title title="Komu pomogamy?"/>
            <div className="organization__button">
                <button className="button" onClick={handleClick }>Fundacjom</button>
                <button className="button" onClick={handleClick}>Organizacjom pozarządowym</button>
                <button className="button" onClick={handleClick}>Lokalnym zbiórkom</button>
            </div>
            {/*<div>111</div>*/}
            {/*{ActiveElement == "Fundacjom" ? <div>tak</div> : null}*/}
            {/*{ActiveElement == "Organizacjom pozarządowym" ? <div>tak222</div> : null}*/}
            {/*{ActiveElement == "Lokalnym zbiórkom" ? <div>tak2223</div> : null}*/}
            <p className="organizations__content">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            <ul>
                {foundations.map((elem, index) => {
                    return <li className="list__element" key={index}>
                        <div className="element__field">
                            <span>{elem.name}</span>
                            <span>{elem.aim}</span>
                        </div>
                        <div>
                            <span>{elem.donation}</span>
                        </div>
                    </li>
                })}
            </ul>

        </section>
    );
};

export default HomeOrganizations;