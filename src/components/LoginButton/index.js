import React from 'react';

import { Button, Label } from './styles';

export default function LoginButton({ props }) {
  return (
    <Button
      {...props}
    >
      <Label>START</Label>
    </Button>
  )
}
