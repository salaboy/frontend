import React, { useContext, useEffect, useState } from "react";
import "./Agenda.scss";
import AppContext from "../../contexts/AppContext";
import axios from 'axios'

export default function Agenda(props) {
    const { appStatus} = useContext(AppContext);
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
        console.log("Querying with: " + "/agenda/" + dayString)
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
            Agenda Component {appStatus.toString()}
            Agenda Items: 
            {agendaItems.toString}
        </div>
    )
}