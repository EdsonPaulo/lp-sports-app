export type TInputType = 'phone' | 'email' | 'name' | 'password' | 'default';

export interface InputProps {
  type?: TInputType;
  label?: string;
}

export const getInputType = (
  type: TInputType | undefined,
): {
  keyboardType: string;
  iconName: string | null;
} => {
  let keyboardType = 'default';
  let iconName = null;
  switch (type) {
    case 'phone':
      keyboardType = 'phone-pad';
      iconName = 'mobile';
      break;
    case 'password':
      keyboardType = 'default';
      iconName = 'lock';
      break;
    case 'name':
      keyboardType = 'default';
      iconName = 'user';
      break;
    case 'email':
      keyboardType = 'email-address';
      iconName = 'mail';
      break;
    default:
      keyboardType = 'default';
      iconName = null;
  }
  return { keyboardType, iconName };
};
