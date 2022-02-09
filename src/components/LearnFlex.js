import './LearnFlex.style.css';
import React, { useEffect, useState } from 'react';


 const LearnFlex = () =>  {

    const [items, setItems] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const sampleText1 = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';

    useEffect(() => {
        console.log('mounting LearnFlex !!!');
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                            console.log('json data is : ', json);
                            setItems(json);
                            setIsDataLoaded(true);
                        })


        return () => {
            console.log('removing LearnFlex !!!');
        }
    }, [])

    const showCards = (data, index) => {
        const name = data?.name;
        const email = data?.email;
        const phone = data?.phone;

        return (
            <div className="card-data">
                <div className="card-name-data">
                    {(index === 1) ?  `${sampleText1} ${sampleText1} ${sampleText1}` : name}
                </div>

                <div className="card-email-data">
                    {(index === 2) ?  `${sampleText1} ${sampleText1}` : email}
                </div>

                <div className="card-phone-data">
                    {(index === 2) ?  sampleText1 : phone}
                </div>
            
            </div>
        )
    }


    return (
        <>
            <h2 className="card-heading"> LearnFlex component </h2>
            <div className="card-lists">
            {
                items && items.map((ele,index) => {
                    const uniqueKey = `key-${index}`;
                    return  (
                        (index <=2) ? 
                    (<div key={uniqueKey} className="card-wrapper"> 
                    { showCards(ele, index)}
                    </div>) :  null)
                })
            }
            </div>

        </>
    )
}

export default LearnFlex;
