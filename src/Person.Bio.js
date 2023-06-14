import React, { Component } from 'react';

class PersonBio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "Peter",
                    description: "I am an aspiring software Engineer",
                },

                {
                    name: "Edmund",
                    description: "I am just a happy being",
                },
            ],

            name: "",
            description: "",
        };

    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            description: this.state.description
        }



        this.setState({
            persons: [...this.state.persons, newPerson],
            name: "",
            description: ""
        })
    }




    render() {
        return (
            <div className="key">
                <section style={{ margin: "2rem" }}>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {/* label for name */}
                            <label>Name:</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            ></input>
                            <br />

                            {/* lable for description */}
                            <label>Description:</label>
                            <br />
                            <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}>
                            </textarea>
                            <br />
                            <input type="submit" defaultValue="Submit" />
                        </div>
                    </form>


                    {this.state.persons.map((item, index) => {
                        return (
                            <div key={index} >
                                <h4>Name : {item.name}</h4>
                                <p>Description: {item.description}</p>
                                <hr></hr>
                            </div>
                        );
                    })}

                </section>
            </div>
        );
    }
}

export default PersonBio;
