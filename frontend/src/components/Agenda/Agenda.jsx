import React, { useEffect, useState } from "react";
import "./Agenda.scss";

import axios from 'axios'

export default function Agenda(props) {
    
    const [agendaItems, setAgendaItems] = useState('') 
    const {day, highlights} = props;

    

    const mockAgendaItemsMonday = [{
        "title": "Cached Entry",
        "author": "Cached Author",
        "time": "1pm",
        "day": "Monday",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia doloribus, molestiae, mollitia quia maiores velit consequuntur dolorem labore beatae, porro aliquam quis! Quasi commodi aperiam, assumenda rem molestiae porro."
    }]
    const mockAgendaItemsTuesday = [{
        "title": "Cached Entry",
        "author": "Cached Author",
        "time": "1pm",
        "day": "Tuesday",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia doloribus, molestiae, mollitia quia maiores velit consequuntur dolorem labore beatae, porro aliquam quis! Quasi commodi aperiam, assumenda rem molestiae porro."
    }]

    useEffect(() => {                           // side effect hook
        var dayString = ''
        if (day) {
            dayString = 'day/' + day
        } else if (highlights) {
            dayString = 'highlights'
        }
        console.log("Querying with: /agenda/" + dayString)
        axios({
            "method": "GET",
            "url": "/api/agenda/" + dayString, // This is going throw the proxy in package.json
            "headers": {}, "params": {}
        })
            .then((response) => {
                setAgendaItems(response.data)
            })
            .catch((error) => {
                if(dayString.includes("highlights") || dayString.includes("Monday")){
                    setAgendaItems(mockAgendaItemsMonday)
                }else {
                    setAgendaItems(mockAgendaItemsTuesday)
                }

                console.log(error)
            })
    }, [setAgendaItems])

    return (
        <div className="Agenda">   
            
            Agenda Items: 
            {agendaItems && agendaItems.length > 0 && agendaItems.map((item, index) => (

                <div key={item.title}> 
                    name={item.title}
                    day={item.day}
                    time={item.time}
                    key={index}
                    position={index}
                    description={item.description}
                    author={item.author}
                    authorImage={item.authorImage}
                    <br />
                    <br /> 
                </div>


                ))}
        </div>
    )
}