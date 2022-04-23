import React from 'react'

export default function Recipe({title,caloriess,image}) {
  return (
    <>
       
       <div className='col-md-4'>
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{caloriess}</h5>
                    <img src={image} alt=""/>
                </div>
                </div>
                </div>
       
    </>
  )
}
