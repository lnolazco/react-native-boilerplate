import React from 'react';
import { Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import CustomView from '../components/CustomView';
import CustomActions from '../components/CustomActions';

export default class Example extends React.Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          image:
            'https://o.aolcdn.com/images/dims3/GLOB/crop/3796x2135+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/cbd7d43e4d28b66152f5543d5f0b02d8/203799172/2017-bmw-m4-competition-sport-00.jpg',
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: '',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          sent: true,
          received: true,
          location: {
            latitude: 48.864601,
            longitude: 2.398704,
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderCustomView(props) {
    return <CustomView {...props} />;
  }

  renderCustomActions(props) {
    // if (Platform.OS === 'ios') {
    return <CustomActions {...props} />;
    // }
    // const options = {
    //   'Action 1': props => {
    //     alert('option 1');
    //   },
    //   'Action 2': props => {
    //     alert('option 2');
    //   },
    //   Cancel: () => {},
    // };
    // return <Actions {...props} options={options} />;
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        renderCustomView={this.renderCustomView}
        renderActions={this.renderCustomActions}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
