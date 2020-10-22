import React from 'react';
import { Media } from 'react-bootstrap';



export default function PhotographerCard(props) {


    return (

        <Media style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', width: '800px', backgroundColor: '#DEB992' }}>
            <img
                width={200}
                height={200}
                className="mr-3"
                src={props.image}
                alt="Image of Photographer"
            />
            <Media.Body style={{ textAlign: 'center', marginTop: '20px', }}>
                <h2 style={{ fontSize: '50px' }}>{props.name}</h2>
                <h3>{props.careerPath}</h3>
                <h4>{props.skillLevel}</h4>
                <h4>{props.email}</h4>
                <p style={{ fontSize: '30px' }}>
                    <br />
                    {props.about}
                </p>
            </Media.Body>
        </Media>

    )
}