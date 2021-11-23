import React from "react"

function CardImage(props){
    if (props.project) {
        return(
            <a href={"http://" + props.project.web_infos.website_url} target="_blank">
                <img alt="..." className="img-raised" src={require("../../images/" + props.project.web_infos.website_img + ".png")} />
            </a>
        )
    }else{
        return (
            <a href="google.com">
                <img alt="..." className="img-raised" src={require("../../images/saludyderechos.png")} />
            </a>
        )
    }
}

export default CardImage;