import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

//criar nossa store
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <TodoForm />
                <TodoList />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
});
