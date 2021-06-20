import { ImageSourcePropType } from 'react-native';

export interface SportProps {
  name: string;
  img: ImageSourcePropType;
  selectedSport: string;
  onSelect: (name: string) => void;
}
