import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import { GridLayout, Card } from '../src/components/GridLayout';
import { ResponsiveHeader, ResponsiveContainer } from '../src/components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
  ResponsiveImage
} from '../src/components/AdaptiveLayout';

export default function HomeScreen() {
  const content = (
    <>
      <StatsRow
        stats={[
          { label: 'Tasks', value: '12' },
          { label: 'Done', value: '8' },
          { label: 'Users', value: '24' },
        ]}
      />

      <ResponsiveImage
        source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' }}
      />

      <FeatureCard
        icon="📱"
        title="Responsive Design"
        description="The layout adapts to phone and tablet screens using Flexbox and window dimensions."
        variant="primary"
      />

      <FeatureCard
        icon="🛡️"
        title="Safe Area Support"
        description="The header avoids notches and system UI areas on modern mobile devices."
        variant="secondary"
      />

      <FeatureCard
        icon="⚡"
        title="Adaptive Components"
        description="Cards, stats, images and content areas automatically scale for different layouts."
        variant="accent"
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Responsive Grid</Text>

        <GridLayout columns={2} spacing={12}>
          <Card title="Dashboard" subtitle="Overview section">
            <Text style={styles.cardText}>Main summary and quick actions</Text>
          </Card>

          <Card title="Analytics" subtitle="Charts and insights">
            <Text style={styles.cardText}>Performance indicators and trends</Text>
          </Card>

          <Card title="Users" subtitle="Profile management">
            <Text style={styles.cardText}>Manage user related information</Text>
          </Card>

          <Card title="Settings" subtitle="App configuration">
            <Text style={styles.cardText}>Preferences and layout options</Text>
          </Card>
        </GridLayout>
      </View>
    </>
  );

  return (
    <View style={styles.appContainer}>
      <ResponsiveHeader
        title="Lab 12 Responsive App"
        leftAction={{
          icon: '←',
          onPress: () => Alert.alert('Left Action', 'Back button pressed')
        }}
        rightAction={{
          icon: '⋮',
          onPress: () => Alert.alert('Right Action', 'Menu button pressed')
        }}
      />

      <ResponsiveContainer>
        <AdaptiveLayout
          content={content}
          footer={
            <View>
              <Text style={styles.footerText}>Built with Flexbox and responsive layouts</Text>
            </View>
          }
        />
      </ResponsiveContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
});