import Button from './Button';
import Drawer from './Drawer';
import TextField from './TextField';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    TextField(theme),
    Drawer(theme),
  );
}
