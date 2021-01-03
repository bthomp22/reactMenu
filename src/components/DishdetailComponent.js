import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';



    function RenderDish({ dish }) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                   
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>                      
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }
      function RenderComments({ comments }) {
        if (comments != null) {
            return (comments.map((user_comment) => {
                return (<div>
                    <li className="list-unstyled">{user_comment.comment}</li>
                    <br></br>
                    <li className="list-unstyled"> :: <i>{user_comment.author}</i>, Date: {user_comment.date.slice(0,10)}</li>
                    <br></br>
                </div>
                );
            }));
        }
        else {
            return (
            <div></div>
            );
        }

    }
                   
    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments = {props.dish.comments}/>
                        </div>
                    </div>

                </div>
            )
        }
        else 
            return (
                <div></div>
            );
    }



export default DishDetail;