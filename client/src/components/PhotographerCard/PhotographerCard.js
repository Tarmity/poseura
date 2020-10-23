import React from 'react';
import { Media } from 'react-bootstrap';



export default function PhotographerCard(props) {


    return (

        <Media style={{ marginLeft: 'auto', marginRight: 'auto', width: '800px', backgroundColor: ' #f1e821 ', borderColor: ' #f1e821 ' }}>
            <img
                width={250}
                height={250}
                className="mr-3"
                src={props.image}
                alt="of Photographer"
            />
            <Media.Body style={{ textAlign: 'center', marginTop: '10px', }}>
                <h2 style={{ fontSize: '40px' }}>{props.name}</h2>
                <h4><strong>Career Path: </strong>{props.careerPath}</h4>
                <h4><strong>Skill Level: </strong>{props.skillLevel}</h4>
                <h4><strong>Email: </strong>{props.email}</h4>
                <p style={{ fontSize: '20px' }}> {props.about}</p>
            </Media.Body>
        </Media>

    )
}