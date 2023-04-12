import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleApplied from "../../components/SingleApplied/SingleApplied";

export default function Applied() {

    let items = JSON.parse(localStorage.getItem("items"))
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        
        if(!existingEntries.some(item => item.id === items.id)){
            existingEntries.push(items);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        }
  return (

    

    <>
      <Header />
      <div className="container">
        <div className="row row-cols-2">
        {
            existingEntries.map((appliedJob) => (
                <SingleApplied key={appliedJob.id} appliedJob={appliedJob} />
              ))
        }

        </div>
      </div>
    </>
  );
}
