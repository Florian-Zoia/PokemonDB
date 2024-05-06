import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TypeSelectionScreen from './screens/TypeSelection';
import ShowType from './screens/ShowType';
import ShowPokemon from './screens/showPokemon';
import FindPokemon from './screens/findPokemon';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Initialize the Stack navigator
const TypeStack = createNativeStackNavigator();
const PokemonStack = createNativeStackNavigator();

// Initialize the Tab navigator
const Tab = createBottomTabNavigator();

function TypeStackNavigation() {
  return (
    <TypeStack.Navigator
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Profile" component={TabNavigation} /> */}
      <TypeStack.Screen name="TypeSelectionScreen" component={TypeSelectionScreen} />
      <TypeStack.Screen name="ShowType" component={ShowType} />
      {/* <Stack.Screen name="ShowPokemon" component={ShowPokemon} /> */}
    </TypeStack.Navigator>
  );
}
function PokemonStackNavigation() {
  return (
    <PokemonStack.Navigator
      screenOptions={{ headerShown: false }}>
      {/* <PokemonStack.Screen name="Profile" component={TabNavigation} /> */}
      {/* <PokemonStack.Screen name="TypeSelectionScreen" component={TypeSelectionScreen} /> */}
      {/* <PokemonStack.Screen name="ShowType" component={ShowType} /> */}
      <PokemonStack.Screen name="findPokemon" component={FindPokemon} />
      <PokemonStack.Screen name="ShowPokemon" component={ShowPokemon} />
    </PokemonStack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#B3B3B3',
        tabBarInactiveBackgroundColor: '#181818',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#181818'
        }
      }}>
      <Tab.Screen
        name="Typ"
        component={TypeStackNavigation}
        options={{
          tabBarLabel: 'Type',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokemon-go" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokemon"
        component={PokemonStackNavigation}
        options={{
          tabBarLabel: 'Pokemon',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="catching-pokemon" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}