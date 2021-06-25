import { ImageSourcePropType } from 'react-native';

export interface SportEventsrops {
  title: string;
  img: ImageSourcePropType;
  notifyEvents: string[];
  selectedEvents: string[];
  onSelect: (eventName: string) => void;
}
