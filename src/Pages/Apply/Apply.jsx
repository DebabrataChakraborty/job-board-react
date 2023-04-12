import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export default function Applied() 
    {
        
        let items = JSON.parse(localStorage.getItem("items"))
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        console.log(existingEntries);
        existingEntries.push(items);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
      

        return (
            <>
                <Header/>
            </>
        );
    }
