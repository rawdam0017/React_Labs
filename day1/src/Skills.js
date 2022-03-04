import './Skills.css'
import React from "react";


class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            focusList: ["UI/UX Design", "Responsive Design", "Wed Design", "Mobile App Design"],
        };
    }
    render() {
        const { focusList } = this.state;
        return (
            <section className="Skills bg-dark text-white my-3 py-3" id="Skills ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center py-3">
                            <h1>Skills</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                                quae sapiente aspernatur quo, vitae aperiam reprehenderit suscipit
                                eligendi, consequatur, dignissimos unde. Culpa fugiat hic porro maxime
                                tempora eaque, quos error! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis dolorem laborum itaque. Perspiciatis in veniam
                                illum deserunt, quos animi maiores nisi officiis amet accusantium
                                soluta a, excepturi vero obcaecati nobis.
                            </p>
                        </div>
                        <div className="col-md-4 Focus">
                            <h5>My Focus</h5>
                            <hr />
                            <ul>
                                {focusList.map((skill) => {
                                    return (<li>{skill}</li>)
                                })}
                            </ul>
                         </div>
                        <div className="col-md-8 pro">
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">HTML</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '85%' }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">CSS</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '85%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">javascript</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '70%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">React</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '70%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">photoshop</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '85%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">Abode XD</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '70%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">Node.js</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '60%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex">
                                <span className="pe-3 badge bg-dark">WordPress</span>
                                <div className="progress" style={{ width: '50%', height: '20px' }}>
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{ width: '50%' }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        )
    }
}

export default Skills;