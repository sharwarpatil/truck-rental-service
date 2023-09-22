import React from 'react'


export default function Card(props) {
  
  return (
    <>
    <div className="card mb-3 "  >

            
            <div className="row g-0 ">
              <div className="col-md-4" id="cardimage1" style={{ backgroundImage: `url(${props.url})` }}>
              
              </div><br/>
              <div className="col-md-8">
                <div className="card-body">
                  <div id="cardtext"></div>
                  <p className="card-text"> 
                    Small tempo 
                    model:35353 
                    capacity :400kg
                    cost :2000 rs
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Natus culpa illo tempore repellat ut incidunt illum laborum! 
                    Saepe, voluptates minima. Assumenda quam illo ipsam iusto minima
                     labore repellendus exercitationem tempore.

              

                  </p>
                  </div>
                </div>
              </div>
            </div>
    <div/>        
    </>
  )
}
