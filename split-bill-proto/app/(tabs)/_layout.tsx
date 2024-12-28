import { Tabs } from 'expo-router';
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
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    // TODO: Fix bottom navigation taking up whole screen
    <Layout
      style={styles.container}>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        <BottomNavigationTab title='USERS' />
        <BottomNavigationTab title='ORDERS' />
        <BottomNavigationTab title='TRANSACTIONS' />
      </BottomNavigation>
    </Layout>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: '10%',
    padding: '0%'
  },
});