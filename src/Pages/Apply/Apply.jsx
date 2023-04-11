import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function Applied() 
    {
        const [items, setItems] = useState([]);
            console.log(items)
        useEffect(() => {
          const items = localStorage.getItem('items');
          if (items) {
           setItems(items);
          }
        }, []);
        return (
            <>
                <Header/>
            </>
        );
    }
