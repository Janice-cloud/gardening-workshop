import React, { Component } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addProject } from  '../../actions/projectActions' 

class ProjectModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        const newProject = {
            name: this.state.name
        }
        // Add item via addItem action
        this.props.addProject(newProject);

        //close modal
        this.toggle();
    }

    
    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Project</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Project Feed</ModalHeader>    
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="project">Project</Label>
                                
                                <Input
                                type="text"
                                name="name"
                                id="project"
                                placeholder="Add project"
                                onChange={this.onChange}
                                ></Input>
                                
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Create Project</Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    project: state.project
})

export default connect(mapStateToProps, {addProject})(ProjectModal);