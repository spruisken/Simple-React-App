import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import './LoginFields.css';
import 'antd/lib/input/style/css';
import 'antd/lib/icon/style/css';

class UsernameField extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  userName: '',
		};
	}

	emitEmpty = () => {
		this.userNameInput.focus();
		this.setState({ userName: '' });
	}

	onChangeUserName = (e) => {
		this.setState({ userName: e.target.value });
	}

	render() {
		const { userName } = this.state;
		const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

		return (
			<Input
				placeholder="Enter your userName"
				prefix={<Icon type="user" />}
				suffix={suffix}
				value={userName}
				onChange={this.onChangeUserName}
				ref={node => this.userNameInput = node}
			/>
		);
	}
}

class PasswordField extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  password: '',
		};
	}

	emitEmpty = () => {
		this.passwordInput.focus();
		this.setState({ password: '' });
	}

	onChangePassword = (e) => {
		this.setState({ password: e.target.value });
	}

	render() {
		const { password } = this.state;
		const suffix = password ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

		return (
			<Input
				placeholder="Enter your password"
				type="password"
				prefix={<Icon type="key" />}
				suffix={suffix}
				value={password}
				onChange={this.onChangePassword}
				ref={node => this.passwordInput = node}
			/>
		);
	}
}

module.exports = {
	UsernameField: UsernameField,
	PasswordField: PasswordField
}