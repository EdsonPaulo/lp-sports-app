import { ImageSourcePropType } from 'react-native';

export interface SportEventsProps {
  title: string;
  img: ImageSourcePropType;
  notifyEvents: string[];
  selectedEvents: string[];
  onSelect: (name: string) => void;
}
