import React from 'react';
import { Button, View, Text } from 'react-native';
import Tasks from '../../components/Tasks';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1  bg-black">
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="font-bold text-xl">Good morning Evans!</Text>
          <Text className="font-medium text-lg text-gray-500">Task Manager</Text>
        </View>
        <View>
          <Button title="Tasks" onPress={() => navigation.navigate('Detail')} />
        </View>
      </View>

      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="font-bold text-xl">Summary</Text>
        </View>
        <View>{/* Dropdown */}</View>
      </View>

      <View className="flex-row justify-around items-center mb-8">
        <View className="bg-green-500 p-4 rounded-xl w-48">
          <Text className="font-bold text-lg text-white">Completed</Text>
          <Text className="font-medium text-lg text-white">21</Text>
        </View>
        <View className="bg-red-500 p-4 rounded-xl w-48">
          <Text className="font-bold text-lg text-white">Incomplete</Text>
          <Text className="font-medium text-lg text-white">21</Text>
        </View>
      </View>

      <View className="my-8">
        <Text className="text-2xl font-bold mb-4">Tasks</Text>
        <Tasks />
      </View>
    </View>
  );
};

export default HomeScreen;
