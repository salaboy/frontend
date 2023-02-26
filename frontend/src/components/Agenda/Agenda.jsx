import React, { useContext } from "react";
import "./Agenda.scss";
import AppContext from "../../contexts/AppContext";

export default function Agenda() {
    const { appStatus} = useContext(AppContext);
    return (
        <div className="Agenda">   
            Agenda Component {appStatus.toString()}
        </div>
    )
}