"use client";
import React, { useState } from 'react'
import NestedA from './nestedA';
import { Button } from '@/components/ui/button';

const TestPage = () => {
  const [active, setActive] = useState(1);
  
    console.log('Main', active);
  return (
    <div>
      <NestedA />
      <Button onClick={() => setActive(active + 1)}>Main</Button>
    </div>
  )
}

export default TestPage