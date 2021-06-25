import React, { FC } from 'react';
import { Avatar, Collapse, Checkbox, Image, Text } from 'react-native-magnus';

import { SportEventsProps } from './notifications.types';

const SportEvents: FC<SportEventsProps> = ({
  notifyEvents,
  img,
  selectedEvents,
  onSelect,
  title,
}) => (
  <Collapse my="sm">
    <Collapse.Header
      bg="white"
      color="gray800"
      borderColor="gray400"
      borderWidth={1}
      fontWeight="900"
      rounded="lg"
      prefix={
        <Avatar mx="xl" mr="lg" size={25}>
          <Image w="100%" h="100%" resizeMode="stretch" source={img} />
        </Avatar>
      }
    >
      {title}
    </Collapse.Header>

    <Collapse.Body bg="gray300" p="xl" pt="lg">
      {notifyEvents.map((e, index) => (
        <Checkbox
          my="xs"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          value={e}
          activeColor="crimson"
          inactiveColor="crimson"
          checked={selectedEvents.includes(e)}
          onChange={onSelect}
          suffix={
            <Text ml="md" mt="xs" fontWeight="bold">
              {e}
            </Text>
          }
        />
      ))}
    </Collapse.Body>
  </Collapse>
);

export default SportEvents;
