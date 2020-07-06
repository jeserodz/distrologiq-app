import React from 'react';
import { View, Text } from 'react-native';

interface MessageProps {
  label: String;
}

export function Message(props: MessageProps) {
  return (
    <View>
      <Text>{props.label}</Text>
    </View>
  );
}
