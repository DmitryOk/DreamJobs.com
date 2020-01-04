import React from 'react';

const style = {display:'flex',flexDirection:'row',flexWrap:'wrap',border:'2px solid #000000'}

const Vacancies = ({posts}) => {
    return (
        <div >
            {posts.map((item, i) => {
                
                  return (
                      <div key={i} style={style}>
                          <p>{item.Company_name}</p>
                          <p>{item.Company_about}</p>
                          <p>{item.Requirements}</p>
                      </div>                  
                  )
                
            })}
        </div>
    )
}

export default Vacancies;