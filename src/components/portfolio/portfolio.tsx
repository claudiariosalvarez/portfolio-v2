import React from "react";
import { Languages } from "../../languages";


interface IProps {
    language: Languages;
}

const MODULE = "porfolio";


export class Portfolio extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    public render(){
        return (
            <div></div>
        )
    }

}