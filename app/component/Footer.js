import React, {Component, PropType} from "react";

export class Footer extends React.Component {
    render() {
        const footer = ["ALL", "ACTIVE", "COMPLETED"].map((filterName, index) => {
            return <div key={index} style={{"display":"inline-block"}}>
                    <span>{filterName}&nbsp;&nbsp;</span>
            </div>
        });
        return <div>
            {footer}
        </div>
    }
}