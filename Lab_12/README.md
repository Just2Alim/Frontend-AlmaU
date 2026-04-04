# Project 2 Step 5 - Styling & Responsive Layouts

Student Name: YOUR NAME  
Student ID: YOUR ID  
Date: YOUR DATE  

## Overview

This project implements responsive styling for a React Native / Expo application using Flexbox, safe area handling and adaptive layouts.

## Implemented Tasks

### Task 1 - Responsive Grid Layout
Created `src/components/GridLayout.tsx`

Features:
- Responsive grid with configurable columns
- Dynamic item width using `useWindowDimensions()`
- Reusable `Card` component
- Flexbox row-based layout

### Task 2 - Safe Area and Responsive Header
Created `src/components/ResponsiveHeader.tsx`

Features:
- `SafeAreaView` for safe area support
- `useSafeAreaInsets()` for device notches and system areas
- Responsive header title sizing
- Platform-specific handling for Android and iOS
- Tablet sidebar layout in `ResponsiveContainer`

### Task 3 - Adaptive Content Layout
Created `src/components/AdaptiveLayout.tsx`

Features:
- Adaptive layout for phone and tablet
- `FeatureCard` reusable content blocks
- `StatsRow` responsive statistics display
- `ResponsiveImage` with adaptive width
- Scrollable responsive content area

## Responsive Design Implementation

The app uses:
- Flexbox for rows, columns and spacing
- `useWindowDimensions()` to detect screen width and height
- Tablet breakpoint at `width >= 768`
- Safe area support with `react-native-safe-area-context`
- Different layouts for phone and tablet screens

## Files

- `App.tsx`
- `src/components/GridLayout.tsx`
- `src/components/ResponsiveHeader.tsx`
- `src/components/AdaptiveLayout.tsx`

## Run Project

```bash
npm install
npx expo install react-native-safe-area-context
npx expo start