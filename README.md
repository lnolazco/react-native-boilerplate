# react-native-boilerplate

With expo

## Pre requirements

install expo client

```bash
npm install -g expo-cli
```

## Install the app

```bash
git clone ...
cd react-native-boilerplate
npm install
expo start
```

## Run the app

- Install the app Expo in the phone to test.
- Then use the QR to open the solution.

## I used

- React native
- Native base
- React navigation
- Gifted chat
- Redux
- Redux form
- Carousel (https://github.com/phil-r/react-native-looped-carousel)

## Scaffolding

- /src source code
  - App.js Main App
  - AppNavigator.js Defines the navigation of the app
  - /apis calls to external apis
    - fetch.js generic call to external apis
  - /components all the react components
    - /base stateless components
    - /screens 
    - /views
  - /config
    - constants.js all the constants used in the app
    - normalizers.js converts json to usefull data structures.
  - /redux
    - /actions
    - /containers Connects the app store data to the components
    - /reducers
    - /selectors Pure functions gets data from store
    - store.js

Screen definition:

```js
<SearchScreen>
  <ScreenHeader />
  <SearchContainer
    render={props => (
      <Content>
        <UsersFilter {...props.filter} />
        <ListUsersView {...props.result} />
      </Content>
    )}
  />
</ComponentScreen>
```
