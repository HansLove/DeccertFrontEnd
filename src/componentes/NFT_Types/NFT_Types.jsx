import React from 'react'
import {Certificaciones} from '../../data/certifaciones.js'
import Div from '../Div/Div.jsx'
import SingleCertificado from '../single_certificado/SingleCertificado.jsx'


function NFT_Types({
    marginTop='none',
    title='Soul Bond Deccert NFT´s'
}) {
  
  return (
    <Div 
    
    View={
    <div style={{
        display:'block',
        margin:'auto',
        marginTop:marginTop,
        alignItems:'center',
        marginBottom:'2%',
        width:'90%'}}
        id='nfts_id'
        >
        <p 
        className='p_mint_name_of_the_user'>{title}</p>

        {Certificaciones.map((item,key)=><SingleCertificado
        name={item.name}
        icon={item.icon}
        imagen={item.image}
        color={item.colors[0]}
        colored={true}
        key={key}/>)}
        

    </div>}/>
  )
}

export default NFT_Types