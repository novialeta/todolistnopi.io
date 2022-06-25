import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const ToDoForm = ({ todo, handleChange, handleSubmit }) => {
  return (
    <div className="container mt-5">
      <Row>
        <Col className="text-center">
          <h1>To Do List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="todo">
              <Form.Label>Rencana hari ini</Form.Label>
              <Form.Control
                type="text"
                name="todo"
                value={todo}
                onChange={(event) => handleChange(event)}
                placeholder="Tambah to do list"
              />
            </Form.Group>
            <Button className="mb-1" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ToDoForm;
