import { useParams, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

export default function Details() {
  const { detail_id } = useParams();
  const datas = useLoaderData();
    console.log(datas);
    console.log(detail_id);

//   useEffect(() => {
//     if(datas){
//         // const singleFeature =  datas.jobs.find(feature => feature.data.id === detail_id);
//     }
//   },[])
  
  return (
    <>
      <Header />
      {/* Render job details here */}
    </>
  );
}