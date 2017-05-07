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

export default UsernameField;