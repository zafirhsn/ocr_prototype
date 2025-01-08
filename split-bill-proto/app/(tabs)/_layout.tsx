import { Tabs, useRouter, Slot } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Layout, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const navigateTo = (index) => {
    setSelectedIndex(index);
    if (index === 0) router.push('/(tabs)/add-bill');
    if (index === 1) router.push('/(tabs)/add-diners');
    if (index === 2) router.push('/(tabs)/hydrate-diners');
    if (index === 3) router.push('/(tabs)/summary');
  };

  return (
    <Layout
      style={styles.container}>
      
      <Layout
        style={styles.childContainer}>
        <Slot />
      </Layout>

      {/* TODO: Add route guards */} 
      {/* TODO: Style bottom nav
          1. Make text bigger
          2. Conditional styling based on step */}
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={navigateTo}
      >
        <BottomNavigationTab title='Bill' />
        <BottomNavigationTab title='Diners' />
        <BottomNavigationTab title='Items' />
        <BottomNavigationTab title='Summary' />
      </BottomNavigation>
    </Layout>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: '10%',
    padding: '0%'
  },
  childContainer: {
    flex: 10,
    width: '100%',
  }
});