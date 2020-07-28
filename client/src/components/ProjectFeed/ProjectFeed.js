import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css"
import { connect } from 'react-redux';
import { getProjects, deleteProject } from '../../actions/projectActions';
import PropTypes from 'prop-types';

class ProjectFeed extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    onDeleteClick = id => {
        this.props.deleteProject(id);
    }

    render() {
        const { projects } = this.props.project;
        return(
            <Container>
               
                <ListGroup>
                    <TransitionGroup className="project-list" >
                    {projects.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                >
                                    &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
                
            </Container>
        );
    }
}

ProjectFeed.propTypes ={
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    project: state.project
})

export default connect(
    mapStateToProps, 
    { getProjects, deleteProject }
) (ProjectFeed);



