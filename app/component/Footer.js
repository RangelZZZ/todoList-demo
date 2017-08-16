import React, {Component, PropType} from "react";

export class Footer extends React.Component {
    render() {
        const footer = ["ALL", "ACTIVE", "COMPLETED"].map((filterName, index) => {
            return <div key={index}>
                    <span>{filterName}&nbsp;&nbsp;</span>
            </div>
        });
        return <div>
            {footer}
        </div>
    }
}