import { Tabs, useRouter, Slot } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { 
  BottomNavigation, 
  BottomNavigationTab, 
  Icon,
  IconElement,
  Layout,
  useTheme
} from '@ui-kitten/components';

import { RootState } from '@/store/store';




export default function TabLayout() {
  const theme = useTheme();
  const styles = themedStyles(theme);

  const router = useRouter();
  const screens = useSelector((state: RootState) => state.screens)
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const SuccessIcon = (props: any): IconElement => (
    <Icon
      {...props}
      name='checkmark-circle-outline'
      fill={theme['color-success-700']}
    />
  );

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
        indicatorStyle={(true ? styles.successIndicator : null)}
      >
        <BottomNavigationTab 
          title='BILL' 
          style={(true ? styles.successNavTab : '')}
          icon={ (true ? SuccessIcon : null ) }  
        />
        <BottomNavigationTab title='DINERS' />
        <BottomNavigationTab title='ITEMS' />
        <BottomNavigationTab title='SUMMARY' />
      </BottomNavigation>
    </Layout>

  );
}

const themedStyles = (theme) => 
  StyleSheet.create({
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
    },
    successNavTab: {
      color: 'white',
      backgroundColor: theme['color-success-300'],
    },
    successIndicator: {
      backgroundColor: theme['color-success-600']
    },
});