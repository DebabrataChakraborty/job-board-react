import { useParams, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect , useState } from "react";

export default function Details() {
let jobdata = []
  const { detail_id } = useParams();
  const datas = useLoaderData();
  for(let job  in datas.jobs){
      if(datas.jobs[job].id == detail_id){
          jobdata = datas.jobs[job] 
      }
  }
  console.log(jobdata)
  

  return (
    <>
      <Header />

      <div class="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Job details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-7 descrip-wrapper">
            <div className="row">
              <div className="col-12">
                 <p>{jobdata.job_description}</p>
              </div>
              <div className="col-12">
                {jobdata.job_responsibilities.map(jobRespon =>{
                  console.log(jobRespon)
                }
                  )}
                 <p></p>
              </div>
            </div>
              

          </div>
          <div className="col-5 details-wrapper">
            
          </div>
        </div>
      </div>
    </>
  );
}
