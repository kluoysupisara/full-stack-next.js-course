"use client";
import React from 'react'
import { AppHero } from './AppHero';
import { AppFeature } from './AppFeature';

export default function HomeContent() {
  return (
    <div>
        <AppHero></AppHero>
        <AppFeature title="Our Service" description="Product detail"/>
    </div>
  )
}
