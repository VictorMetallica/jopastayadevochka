import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"Kuplu vse"
                },
                {
                    key:"Food",
                    name:"NomNomNom"
                },
                {
                    key:"Tool",
                    name:"Palki i pushki"
                },
                {
                    key:"NFT",
                    name:"NFT"
                },
                {
                    key:"Tvar",
                    name:"Chmoshnica"
                }
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories