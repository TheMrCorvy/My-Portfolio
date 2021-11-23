import React from 'react';

import classnames from "classnames";

import {
    Button,
    FormGroup,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
  } from "reactstrap";

class FormControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          focused: ""
        }
      }
      onFocus = () => {
        this.setState({
          focused: "input-group-focus"
        });
      };
      onBlur = () => {
        this.setState({
          focused: ""
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e)
      }
      //por algun motivo que desconozco, el formulario se rompe si las funciones no están en footer.jsx... asi que todas las llamadas a la api se hacen desde ahi (para el login al menos)

    render() {
        return (
            <Form onSubmit={this.handleSubmit} role="form">
                  <FormGroup className="mb-3">
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText className="bg-info">
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        onChange={this.props.onChange}
                        name="emailForm"
                        value={this.props.formValues.emailForm}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText className="bg-info">
                          <i className="tim-icons icon-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={e => this.setState({ passwordFocus: true })}
                        onBlur={e => this.setState({ passwordFocus: false })}
                        onChange={this.props.onChange}
                        name="passForm"
                        value={this.props.formValues.passForm}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="success" type="submit">
                      Ingresar
                    </Button>
                  </div>
                </Form>
        )
    }
}

export default FormControl;