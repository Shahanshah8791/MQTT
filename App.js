/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import mqtt from 'mqtt';

const App = () => {
  const [mqttState, useMqttState] = useState('');
  useEffect(() => {
    mqttConnection();
  }, []);
  const mqttConnection = () => {
    // const client = mqtt.connect('mqtt://test.mosquitto.org', {
    //   clientId: 'mqttjs_12dsjfbsdkj',
    //   clean: true,
    //   keepalive: 120,
    //   reconnectPeriod: 5000,
    //   port: 1883
    // });
    const client = mqtt.connect({
      port: 1883,
      host: 'test.mosquitto.org',
      protocol: 'mqtt',
      clientId: 'mqttjs_12dsjfbsdkj',
      clean: true,
      keepalive: 120,
      reconnectPeriod: 5000,
    });
    client.on('connect', () => {
      console.log('connected with mqtt');
    });
    client.on('error', () => {
      console.log('error with mqtt');
    });
    client.on('reconnect', () => {
      console.log('reconnect with mqtt');
    });
    client.on('offline', () => {
      console.log('offline with mqtt');
    });
    client.on('close', () => {
      console.log('close with mqtt');
    });
    client.on('disconnect', () => {
      console.log('disconnect with mqtt');
    });

    client.on('message', (topic, message) => {
      console.log('message with mqtt');
      // client.end();
    });

    // .on('message', (topic, message, packet) => {
    //   console.log('message with mqtt');
    //   // onMessage(topic, message)
    // })
    // console.log('client', client);
    // client.on('connect', () => {
    //   console.log('connected with mqtt');
    //   // client.subscribe('presence', err => {
    //   //   if (!err) {
    //   //     client.publish('presence', 'Hello mqtt');
    //   //   }
    //   // });
    // });

    // client.on('message', (topic, message) => {
    //   // message is Buffer
    //   console.log(message.toString());
    //   client.end();
    // });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>MQTT state is: {mqttState}</Text>
    </SafeAreaView>
  );
};

export default App;
