//https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/src/screens/sidebar/index.js
import React from 'react';
// import { Image } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
} from 'native-base';
import styles from './SideMenu.styles';

/*
routes = [
{
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    badge: {
      text: '',
      backgroundColor: '',
    }
  },
]
*/

const SideMenu = ({ navigateTo, routes }) => (
  <Container>
    <Content bounces={false} style={styles.content}>
      {/* <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} /> */}
      <List
        dataArray={routes}
        renderRow={data => (
          <ListItem button noBorder onPress={() => navigateTo(data.route)}>
            <Left>
              <Icon active name={data.icon} style={styles.icon} />
              <Text style={styles.text}>{data.name}</Text>
            </Left>
            {data.badge && (
              <Right style={{ flex: 1 }}>
                <Badge
                  style={{
                    ...styles.badge,
                    backgroundColor: data.badge.backgroundColor,
                  }}
                >
                  <Text style={styles.badgeText}>{data.badge.text}</Text>
                </Badge>
              </Right>
            )}
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

export default SideMenu;
